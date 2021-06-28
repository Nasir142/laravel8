<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use LaravelFCM\Message\OptionsBuilder;
use LaravelFCM\Message\PayloadDataBuilder;
use LaravelFCM\Message\PayloadNotificationBuilder;
use FCM;


class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    
     public function sendRemoteNotification($title, $body, $push_token, $payload = [])
  {
    $optionBuilder = new OptionsBuilder();
    $optionBuilder->setTimeToLive(60 * 20);
    $optionBuilder->setPriority('high');

    $notificationBuilder = new PayloadNotificationBuilder($title);
    $notificationBuilder->setBody($body);

    $dataBuilder = new PayloadDataBuilder();
    $dataBuilder->addData($payload);

    $option = $optionBuilder->build();
    $notification = $notificationBuilder->build();
    $data = $dataBuilder->build();
    FCM::sendTo($push_token, $option, $notification, $data);
  }
}
