export default function TheFooter() {
  return (
    <footer>
      <div className={'container footer-wrapper'}>
        <div className={'location'}>
          <iframe className={'map'}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.0592141094123!2d30.416421086761744!3d59.93115960027282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631e5d357591d%3A0x31bac73eacca7159!2z0JHQo9Ck0KQ!5e0!3m2!1sru!2sru!4v1691256925302!5m2!1sru!2sru"
                  referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className={'footer-info'}>
          <div className={'footer-link'}>
            <div className={'contact'}>
              <h1>Контакты</h1>
              <p>8 (812) 573-95-95</p>
              <p>8 (921) 597-58-99</p>
            </div>
            <div className={'social'}>
              <h1>Социальные сети</h1>
              <div className={'icon'}>
                <a href={'/'}><img alt={'vk'} src='/img/icon/vk.svg'/></a>
                <a href={'/'}><img alt={'telegram'} src='/img/icon/telegram.svg'/></a>
                <a href={'/'}><img alt={'twitter'} src='/img/icon/twitter.svg'/></a>
              </div>
            </div>
          </div>
          <div className={'mailing'}>
            <h1>Подпишитесь на наши новости</h1>
            <form className="email">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path
                      d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                    <path
                      d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                  </svg>
                </div>
                <input type="text" id="input-group-1"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full pl-10 p-2.5"
                       placeholder="name@gmail.com" />
              </div>
            </form>
          </div>
          <div>
            <p>Санкт-Петербургский Государственный Музыкально-Драматический Театр «БУФФ»</p>
          </div>
        </div>
      </div>
    </footer>
  )
}