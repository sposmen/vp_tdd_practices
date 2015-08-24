#language: en

Feature: iniciar juego
  Como jugador
  quiero que el juego me de la bienvenida
  para engancharme al juego

  Scenario: veo la pantalla de bienvenida
    Given ingreso al juego
    Then veo el mensaje "Mortal Kombat"
    And veo segundo mensaje "Press Start"

  Scenario: veo la pantalla de bienvenida
    Given ingreso al juego
    When presiono Start
    Then el juego muestra la pantalla de ingreso de jugadores con el mensaje "Fight!"