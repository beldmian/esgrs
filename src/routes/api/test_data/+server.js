import { json } from '@sveltejs/kit';

export function GET() {
  return json({
    company: "ПАО \"Россети\"",
    company_type: "unfin",
    category_data: {
      id: 1,
      name: "Электроэнергетика",
      weights: [
        {
          id: "E_1",
          weight_unfin: 0.1,
          weight_fin: 0,
        },
        {
          id: "E_2",
          weight_unfin: 0.1,
          weight_fin: 0,
        },
        {
          id: "E_3",
          weight_unfin: 0.1,
          weight_fin: 0,
        },
        {
          id: "E_4",
          weight_unfin: 0.1,
          weight_fin: 0,
        },
        {
          id: "E_5",
          weight_unfin: 0.1,
          weight_fin: 0,
        },
        {
          id: "E_6",
          weight_unfin: 0.1,
          weight_fin: 0,
        },
        {
          id: "E_7",
          weight_unfin: 0.2,
          weight_fin: 0,
        },
        {
          id: "E_8",
          weight_unfin: 0.1,
          weight_fin: 0.1,
        },
        {
          id: "E_9",
          weight_unfin: 0.1,
          weight_fin: 0.1,
        },
        {
          id: "E_10",
          weight_unfin: 0,
          weight_fin: 0.8,
        },
        {
          id: "S_1",
          weight_unfin: 0.2,
          weight_fin: 0.4,
        },
        {
          id: "S_2",
          weight_unfin: 0.3,
          weight_fin: 0.3,
        },
        {
          id: "S_3",
          weight_unfin: 0.3,
          weight_fin: 0.2,
        },
        {
          id: "S_4",
          weight_unfin: 0.2,
          weight_fin: 0.1,
        },
        {
          id: "G_1",
          weight_unfin: 0.05,
          weight_fin: 0.15,
        },
        {
          id: "G_2",
          weight_unfin: 0.3,
          weight_fin: 0.25,
        },
        {
          id: "G_3",
          weight_unfin: 0.15,
          weight_fin: 0.15,
        },
        {
          id: "G_4",
          weight_unfin: 0.10,
          weight_fin: 0.15,
        },
        {
          id: "G_5",
          weight_unfin: 0.25,
          weight_fin: 0.25,
        },
        {
          id: "G_6",
          weight_unfin: 0.15,
          weight_fin: 0.05,
        },
      ]
    },
    rank: "AA",
    criterias: [
      {
	id: "E",
        name: "E",
        mark: 3,
        criterias: [
          {
            id: "E_1",
            name: "Выбросы парниковых газов",
            mark: 2,
            year: 2022,
          },
          {
            id: "E_2",
            name: "Энергопотребление и энергоэффективность",
            mark: 4,
            year: 2022,
          },
          {
            id: "E_3",
            name: "Выбросы в атмосферу загрязняющих веществ",
            mark: 1,
            year: 2022,
          },
          {
            id: "E_4",
            name: "Обращение с водными ресурсами",
            mark: 0,
            year: 2022,
          },
          {
            id: "E_5",
            name: "Обращение с отходами",
            mark: 3,
            year: 2022,
          },
          {
            id: "E_6",
            name: "Рекультивация и биоразнообразие",
            mark: 2,
            year: 2022,
          },
          {
            id: "E_7",
            name: "Цепочка поставок",
            mark: 4,
            year: 2022,
          },
          {
            id: "E_8",
            name: "Аварии и штрафы",
            mark: 0,
            year: 2022,
          },
          {
            id: "E_9",
            name: "Инвестиции в технологии и экологические проекты",
            mark: 1,
            year: 2022,
          },
          {
            id: "E_10",
            name: "Оценка портфеля",
            mark: 2,
            year: 2022,
          },
        ]
      },
      {
        name: "S",
	id: "S",
        mark: 2,
        criterias: [
          {
            id: "S_1",
            name: "Система мотивации персонала",
            mark: 4,
            year: 2022,
          },
          {
            id: "S_2",
            name: "Политика равенства",
            mark: 2,
            year: 2022,
          },
          {
            id: "S_3",
            name: "Охрана труда и техника безопасности",
            mark: 1,
            year: 2022,
          },
          {
            id: "S_4",
            name: "Взаимодействие с клиентами / обществом",
            mark: 3,
            year: 2022,
          },
        ],
      },
      {
        name: "G",
	id: "G",
        mark: 3,
        criterias: [
          {
            id: "G_1",
            name: "Структура собственности и реализация акционерами (участниками) прав",
            mark: 4,
            year: 2022,
          },
          {
            id: "G_2",
            name: "Органы управления",
            mark: 2,
            year: 2022,
          },
          {
            id: "G_3",
            name: "Стратегия",
            mark: 1,
            year: 2022,
          },
          {
            id: "G_4",
            name: "Система вознаграждения",
            mark: 3,
            year: 2022,
          },
          {
            id: "G_5",
            name: "Управление рисками",
            mark: 0,
            year: 2022,
          },
          {
            id: "G_6",
            name: "Раскрытие информации",
            mark: 3,
            year: 2022,
          },
        ]
      }
    ]
  })
}
