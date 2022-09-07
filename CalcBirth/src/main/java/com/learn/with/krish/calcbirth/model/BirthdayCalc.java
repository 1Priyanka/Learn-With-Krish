
package com.learn.with.krish.calcbirth.model;

import com.learn.with.krish.calcbirth.service.BirthdayImpl;

import javax.jws.WebMethod;
import javax.jws.WebService;


@WebService
public class BirthdayCalc {
    
    BirthdayImpl serviceImpl=new BirthdayImpl();
    
    @WebMethod
    public int calculateBD(int year,int month,int day){
    
    return serviceImpl.calculateBD(year, month, day);
    
    }
    
}
