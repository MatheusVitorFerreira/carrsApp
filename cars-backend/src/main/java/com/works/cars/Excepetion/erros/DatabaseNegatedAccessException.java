package com.works.cars.Excepetion.erros;

public class DatabaseNegatedAccessException extends RuntimeException {

    public DatabaseNegatedAccessException(String msg) {
        super(msg);
    }
}
