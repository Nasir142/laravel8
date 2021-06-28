<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Pdf;
use App\Notifications\NewAssignment;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;



class AdminController extends Controller
{
    public function get_users()
    {
        return response()->json(User::where('role', 1)->get());
    }
    
     public function pdf_upload(Request $request)
    {
        $request->validate(['pdf' => 'required', 'user_id' => "required" , 'size' => 'required', 'name' => 'required|unique:pdfs' , 'task_type' => 'required']);
        
        $user = User::find($request->user_id);
       
        if($request->get('pdf')){
          $file = $request->get('pdf');
          $base = base64_decode($file);
        //   $fileName =$user->name . $user->id . Str::random(6) . '.pdf';
          $fileName = request()->name;
          Storage::disk('local')->put($fileName, $base);
          $user->pdfs()->create([
               'name' => $fileName,
               'size' => $request->size,
               'task_type' => $request->task_type,
               'type' => 'pdf',
              ]);
          if($user->push_token) {
              $this->sendRemoteNotification('Nova tarefa', 'você atribuiu uma nova tarefa',$user->push_token);
          }
          $user->notify(new NewAssignment());
          return response()->json(['message' => 'success']);
         }else{
             return response()->json(['message' => 'file not found'],404);
         }
    }
    
    public function get_documents(User $user) {
        $pdfs = Pdf::where(['user_id' => $user->id , 'status' => 0 , 'task_type' => request()->pdf_type])->latest()->get();
        return response()->json($pdfs);
    }
     public function get_completed_documents(User $user) {
        $pdfs = Pdf::where(['user_id' => $user->id , 'status' => 1 , 'task_type' => request()->pdf_type])->latest()->get();
        return response()->json($pdfs);
    }
     public function get_unfinished_documents(User $user) {
        $pdfs = Pdf::where(['user_id' => $user->id , 'status' => 2 , 'task_type' => request()->pdf_type])->latest()->get();
        return response()->json($pdfs);
    }
}
