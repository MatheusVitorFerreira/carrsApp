package com.works.cars.controller;

import com.works.cars.dto.records.CarroRequest;
import com.works.cars.dto.records.CarroResponse;
import com.works.cars.service.CarroService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/cars/api/v1/carro")
@RequiredArgsConstructor
public class CarroController {

    private final CarroService carroService;

    @GetMapping
    public ResponseEntity<Map<String, List<CarroResponse>>> getAll() {
        List<CarroResponse> cars = carroService.findAll();
        return ResponseEntity.ok(Map.of("cars", cars));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CarroResponse> getById(@PathVariable Long id) {
        CarroResponse response = carroService.findById(id);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<CarroResponse> createCar(@RequestBody CarroRequest request) {
        if (request.modelo_id() == null) {
            throw new IllegalArgumentException("modeloId não pode ser nulo");
        }
        CarroResponse saved = carroService.createCarro(request);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CarroResponse> updateCar(@PathVariable Long id, @RequestBody CarroRequest request) {
        if (request.modelo_id() == null) {
            throw new IllegalArgumentException("modeloId não pode ser nulo");
        }
        CarroResponse updated = carroService.updateCarro(id, request);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteCar(@PathVariable Long id) {
        carroService.deleteCarro(id);
        return ResponseEntity.ok(Map.of("message", "Carro deletado com sucesso"));
    }
}
