package com.krish.with.learn;

public class Main {

    public static void main(String[] args) {
	// write your code here
//        Printer printer = new Printer();
//        printer.start();
//        Thread t = new Thread(printer);

//        t.start();
        System.out.println("Main thread before: " + Thread.currentThread().getPriority());
        //set main thread priority in to 7
        Thread.currentThread().setPriority(7);
        System.out.println("Main thread after: " + Thread.currentThread().getPriority());

        Printer printer = new Printer();
        printer.start();

        System.out.println("Child thread: " + printer.getPriority());
        System.out.println("This is from main thread");

    }
}
