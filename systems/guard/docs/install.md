# Установка Guard

## Шаг 1: Импорт модели

1. Открой свой опыт в Roblox Studio
2. Вставь модель `Guard` из Toolbox (или скопируй из репозитория)
3. Перемести её в `ServerScriptService`

## Шаг 2: Настройка

Открой скрипт `GuardMain` и проверь конфигурацию:

```lua
local Config = {
    EnableSpeedCheck = true,
    EnableNoclipCheck = true,
    LogChannel = "GuardLogs",
}
```

## Шаг 3: Проверка

Запусти игру и в Output должны появиться сообщения:

```
[Guard] System initialized
[Guard] Monitoring player 123456789
```
