package com.krish.with.learn;

public class MultiThreadPrinter extends Thread{
    @Override
    public void run() {
        for (int i = 0; i <= 200; i++){
            System.out.println("Child" + i);
        }

    }
}
