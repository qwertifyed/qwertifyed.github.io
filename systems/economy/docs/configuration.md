# Конфигурация Economy

## Основные параметры

| Параметр | Тип | По умолчанию | Описание |
| --- | --- | --- | --- |
| `CurrencyName` | string | `"Coins"` | Название валюты |
| `StartingBalance` | number | `100` | Стартовый баланс нового игрока |
| `DataStoreName` | string | `"EconomyData"` | Название DataStore для сохранений |

## Тонкая настройка

```lua
Config.AutoSaveInterval = 120  -- интервал автосейва (секунды)
Config.MaxBalance = 1e9        -- максимальный баланс
Config.TransactionLog = true   -- логировать все транзакции
```
