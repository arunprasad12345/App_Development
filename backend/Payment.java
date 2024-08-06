package com.example.demo.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Payment {
    @Id
    int cardnumber;
    String name;
    String expiry;
    int cvv;
    public Payment()
    {
        
    }
    public Payment(int cardnumber, String name, Date expiry, int cvv) {
        this.cardnumber = cardnumber;
        this.name = name;
        this.expiry = expiry;
        this.cvv = cvv;
    }
    public int getCardnumber() {
        return cardnumber;
    }
    public void setCardnumber(int cardnumber) {
        this.cardnumber = cardnumber;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getExpiry() {
        return expiry;
    }
    public void setExpiry(String expiry) {
        this.expiry = expiry;
    }
    public int getCvv() {
        return cvv;
    }
    public void setCvv(int cvv) {
        this.cvv = cvv;
    }
}