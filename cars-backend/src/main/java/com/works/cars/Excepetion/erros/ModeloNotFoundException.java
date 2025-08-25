package com.works.cars.Excepetion.erros;

public class ModeloNotFoundException extends RuntimeException {

    public ModeloNotFoundException(String msg) {
        super(msg);
    }
}
