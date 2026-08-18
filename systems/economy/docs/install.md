# Установка Economy

## Шаг 1: Импорт модели

1. Открой свой опыт в Roblox Studio
2. Вставь модель `Economy` из Toolbox (или скопируй из репозитория)
3. Перемести её в `ServerScriptService`

## Шаг 2: Настройка

Открой скрипт `EconomyMain` и проверь конфигурацию:

```lua
local Config = {
    CurrencyName = "Coins",
    StartingBalance = 100,
    DataStoreName = "EconomyData",
}
```

## Шаг 3: Проверка

Запусти игру и в Output должны появиться сообщения:

```
[Economy] System initialized
[Economy] Loaded balance for player 123456789: 100
```
