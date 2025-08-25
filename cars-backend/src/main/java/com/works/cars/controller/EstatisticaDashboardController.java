package com.works.cars.controller;

import com.works.cars.dto.EstatisticaDashboard;
import com.works.cars.service.EstatisticaDashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cars/api/v1/estatisticas")
@RequiredArgsConstructor
public class EstatisticaDashboardController {

    private final EstatisticaDashboardService estatisticaDashboardService;

    @GetMapping
    public ResponseEntity<EstatisticaDashboard> getEstatisticas() {
        EstatisticaDashboard estatisticas = estatisticaDashboardService.getEstatisticas();
        return ResponseEntity.ok(estatisticas);
    }
}
