import Link from "next/link";

const scene:any = [
  {id: 1, name: 'Основная сцена'},
  {id: 2, name: 'Кабаре-буфф'},
]

const prom:any = [
  {id: 1, name: "Островский #любовь", author: "Александр Грибоедов", premierStatus: true, img: "x06lbrEN3i8.jpg", date: new Date(2023, 8, 15, 19), sceneId: 1},
  {id: 2, name: "Островский #любовь", author: "Александр Грибоедов", premierStatus: false, img: "h7w2LkSf1Og.jpg", date: new Date(2023, 8, 15, 19), sceneId: 1},
  {id: 3, name: "Островский #любовь", author: "Александр Грибоедов", premierStatus: false, img: "U2skRr1GPpg.jpg", date: new Date(2023, 8, 15, 19), sceneId: 1},
  {id: 4, name: "Островский #любовь", author: "Александр Грибоедов", premierStatus: false, img: "x9zH4L2gOD8.jpg", date: new Date(2023, 8, 15, 19), sceneId: 1},
  {id: 4, name: "Островский #любовь", author: "Александр Грибоедов", premierStatus: false, img: "unyYdgqu6lE.jpg", date: new Date(2023, 8, 15, 19), sceneId: 1},
  {id: 4, name: "Островский #любовь", author: "Александр Грибоедов", premierStatus: false, img: "wLs2kLjyg_c.jpg", date: new Date(2023, 8, 15, 19), sceneId: 1},
]

const grid:any = [
  2, 1,
  1, 2,
  2, 1
]

function getDate(date: Date):any {
  if (!date) return

  const days:any =["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const months:any =["января", "февраля", "марта", "апреля",
    "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  return `${date.getDate()} ${months[date.getMonth()]}, ${days[date.getDay()]}`
}

function getTime(date: Date, sceneId: number):any {
  if (!date) {
    if (sceneId) return `${scene[--sceneId].name}`
    else return
  }

  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  return `${hour}:${minute} | ${scene[--sceneId].name}`
}

export default function HomePoster() {
  return (
    <div className={'home-poster container'}>
      <div className={'flex items-center justify-between'}>
        <h1>Афиша</h1>
        <Link href={"/"}>ПОСМОТРЕТЬ ВСЕ </Link>
      </div>
      <div className={'poster'}>
        {prom.map((el: any, index: number) =>
          <div key={index} className={`poster-card`} style={{width: `${grid[index] === 2 ? '60%' : '40%'}`}}>
            <div className={'poster-card_wrapper'}>
              <div className={'poster-img'} style={{background: `url(/img/${el.img}) center center no-repeat`}}></div>
              <div className={'poster-info'}>
                <div className={'poster-info_date'}>
                  <span className={'date'}>{getDate(el.date)}</span>
                  <span className={'time'}>{getTime(el.date, el.sceneId)}</span>
                </div>
                <div className={'poster-info_name'}>
                  <h1 className={'name'}>{el.name}</h1>
                  <p className={'author'}>{el.author}</p>
                </div>
                <button>
                  Купить билет
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}