<?php

namespace App\Console;

use App\Jobs\SentMqtt;
use App\Models\JadwaPakan;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Salman\Mqtt\MqttClass\Mqtt;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();
        $schedule->call(function () {
            $jadwal = JadwaPakan::all();
            foreach ($jadwal as $item) {
                // dd($item->jam == now()->format('h:i'));
                // dd(now()->format('H:I'));
                if ($item->jam == now()->format('H:i')) {
                    dispatch(new SentMqtt('aktif'));
                }
            }
        })->everyMinute()->runInBackground();

        // dd($item->jam);
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
