package com.works.cars.service;

import com.works.cars.dto.EstatisticaDashboard;
import com.works.cars.repository.CarroRepository;
import com.works.cars.repository.MarcaRepository;
import com.works.cars.repository.ModeloRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EstatisticaDashboardService {

    private final CarroRepository carroRepository;
    private final ModeloRepository modeloRepository;
    private final MarcaRepository marcaRepository;

    public EstatisticaDashboard getEstatisticas() {
        EstatisticaDashboard estat = new EstatisticaDashboard();

        estat.setTotalDeVeiculos(carroRepository.count());
        estat.setTotalDeModelos(modeloRepository.count());
        estat.setMarcasCadastradas(marcaRepository.count());
        estat.setValorTotalAvaliado(carroRepository.somaValoresCarros());

        return estat;
    }
}
