package com.works.cars.Excepetion.erros;

public class CarroNotFoundException extends RuntimeException {

    public CarroNotFoundException(String msg) {
        super(msg);
    }
}
