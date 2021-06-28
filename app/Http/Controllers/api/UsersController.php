<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Notifications\UpdateAssignment;
use App\Models\Pdf;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UsersController extends Controller
{
    
    public function completedpdfFiletoserver(Request $request) {
         request()->validate(['name' => 'required', 'pdf' => 'required', 'user_id' => 'required']);
         $pdf = Pdf::where('name' , request()->name)->first();
         $admin = User::where('role' ,0)->first();
         $current_pdf = $pdf->name;
         $current_pdf_path = public_path('storage/') . $current_pdf;
         if (file_exists($current_pdf_path)) {
                @unlink($current_pdf_path);
         }
          $file = $request->get('pdf');
          $base = base64_decode($file);
          $fileName = $pdf->name;
          Storage::disk('local')->put($fileName, $base);
          $pdf->status = 1;
          if($admin->push_token) {
              $this->sendRemoteNotification('Tarefa de atualização', 'marca de tarefa como concluída',$admin->push_token);
          }
          $admin->notify(new UpdateAssignment());
          $pdf->save();
          return response()->json(['message' => 'success']);
         
    }
     public function savepdfFiletoserver(Request $request) {
         request()->validate(['name' => 'required', 'pdf' => 'required', 'user_id' => 'required']);
         $pdf = Pdf::where('name' , request()->name)->first();
         $admin = User::where('role' ,0)->first();
         $current_pdf = $pdf->name;
         $current_pdf_path = public_path('storage/') . $current_pdf;
         if (file_exists($current_pdf_path)) {
                @unlink($current_pdf_path);
         }
          $file = $request->get('pdf');
          $base = base64_decode($file);
          $fileName = $pdf->name;
          Storage::disk('local')->put($fileName, $base);
          $pdf->status = 2;
          if($admin->push_token) {
              $this->sendRemoteNotification('Tarefa de atualização', 'marca de tarefa como inacabada',$admin->push_token);
          }
          $pdf->save();
          return response()->json(['message' => 'success']);
         
    }
    public function getNotifications() {
        return response()->json(request()->user()->notifications);
    }
    
    public function clearNotifications() {
        return response()->json([request()->user()->notifications()->delete()]);
    }
    
    public function edit_user(User $user) {
        request()->validate(['name' => 'required', 'email' => "required"]);
        $user->name = request()->name;
        $user->email = request()->email;
        if(request()->password) {
            $user->password = Hash::make(request()->password);
        }
        $user->save();
        return response()->json(['message' => 'success']);
    }
}
