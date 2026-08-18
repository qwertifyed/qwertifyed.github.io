# Конфигурация Guard

## Основные параметры

| Параметр | Тип | По умолчанию | Описание |
| --- | --- | --- | --- |
| `EnableSpeedCheck` | boolean | `true` | Проверка подозрительной скорости |
| `EnableNoclipCheck` | boolean | `true` | Проверка прохождения сквозь стены |
| `LogChannel` | string | `"GuardLogs"` | Название канала логов в DataStore |

## Тонкая настройка

```lua
Config.MaxSpeed = 75          -- максимальная скорость (студии в секунду)
Config.BanThreshold = 3       -- число нарушений до бана
Config.AutoReport = true      -- отправлять жалобы на админов
```
