package com.krish.with.learn;

public class MultiThreadMain {
    public static void main(String[] args) {
        MultiThreadPrinter mp = new MultiThreadPrinter();
        mp.start();

        for (int i = 0; i <= 10; i++){
            System.out.println("Main " + i);
        }
    }
}
