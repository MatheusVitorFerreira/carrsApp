package com.works.cars.controller;

import com.works.cars.dto.MarcaDTO;
import com.works.cars.service.MarcaService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/cars/api/v1/marca")
@RequiredArgsConstructor
public class MarcaController {

    @Autowired
    private final MarcaService marcaService;

    @GetMapping
    public ResponseEntity<List<MarcaDTO>> getAllMarcas() {
        List<MarcaDTO> marcaDTOList = marcaService.findAll();
        return ResponseEntity.ok(marcaDTOList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MarcaDTO> getMarcaById(@PathVariable Long id) {
        MarcaDTO marcaDTO = marcaService.findById(id);
        return ResponseEntity.ok(marcaDTO);
    }

    @PostMapping
    public ResponseEntity<MarcaDTO> CreateMarca(@Valid @RequestBody MarcaDTO marcaDTO) {
        MarcaDTO createdMarca = marcaService.createMarca(marcaDTO);
        URI headerLocation = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(createdMarca.getId())
                .toUri();
        return ResponseEntity.created(headerLocation).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<MarcaDTO> updateMarca(@PathVariable Long id, @Valid @RequestBody MarcaDTO marcaDTO) {
        MarcaDTO updatedMarca = marcaService.updateMarca(marcaDTO, id);
        return ResponseEntity.ok(updatedMarca);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<MarcaDTO> deleteMarca(@PathVariable Long id) {
        marcaService.deleteMarca(id);
        return ResponseEntity.noContent().build();
    }


}
