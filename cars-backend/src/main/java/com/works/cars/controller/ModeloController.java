package com.works.cars.controller;

import com.works.cars.dto.ModeloDTO;
import com.works.cars.dto.records.ModeloList;
import com.works.cars.dto.records.ModeloRequest;
import com.works.cars.dto.records.ModeloResponse;
import com.works.cars.service.ModeloService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/cars/api/v1/modelo")
@RequiredArgsConstructor
public class ModeloController {

    @Autowired
    private final ModeloService modeloService;

    @GetMapping
    public ResponseEntity<List<ModeloResponse>> getAllModelos() {
        return ResponseEntity.ok(modeloService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ModeloDTO> getModeloById(@PathVariable Long id) {
        ModeloDTO modeloDTO = modeloService.findById(id);
        return ResponseEntity.ok(modeloDTO);
    }

    @PostMapping
    public ResponseEntity<ModeloResponse> createModelo(@Valid @RequestBody ModeloRequest request) {
        ModeloResponse createdModelo = modeloService.createModelo(request);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(createdModelo.id())
                .toUri();
        return ResponseEntity.created(location).body(createdModelo);
    }

    @GetMapping("/lista")
    public ResponseEntity<List<ModeloList>> getAllModelosSimplificados() {
        return ResponseEntity.ok(modeloService.findAllSimplificado());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ModeloResponse> updateModelo(
            @PathVariable Long id,
            @Valid @RequestBody ModeloRequest request) {
        ModeloResponse updatedModelo = modeloService.updateModelo(id, request);
        return ResponseEntity.ok(updatedModelo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteModelo(@PathVariable Long id) {
        modeloService.deleteModelo(id);
        return ResponseEntity.noContent().build();
    }
}
