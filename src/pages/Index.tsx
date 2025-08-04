import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import QRCodeComponent from "@/components/QRCode";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">♔</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black">Шахматный клуб "Интеллект"</h1>
                <p className="text-gray-600 text-sm">г. Пермь</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#groups" className="text-gray-700 hover:text-black transition-colors">Группы</a>
              <a href="#schedule" className="text-gray-700 hover:text-black transition-colors">Расписание</a>
              <a href="#pricing" className="text-gray-700 hover:text-black transition-colors">Стоимость</a>
              <a href="#tournaments" className="text-gray-700 hover:text-black transition-colors">Турниры</a>
              <a href="#contacts" className="text-gray-700 hover:text-black transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className={`${
                  Math.floor(i / 8) % 2 === i % 2 ? 'bg-white' : 'bg-black'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">Развивайте интеллект через шахматы</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Обучение шахматам для детей от 5 до 11 лет в уютной атмосфере нашего клуба
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/OLARUDOMETOVA" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-chess-gold hover:bg-chess-gold/90 text-black font-semibold">
                <Icon name="Send" className="mr-2" size={20} />
                Записаться на пробное занятие
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Icon name="Calendar" className="mr-2" size={20} />
              Посмотреть расписание
            </Button>
          </div>
        </div>
      </section>

      {/* Groups Section */}
      <section id="groups" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Наши группы</h2>
            <p className="text-gray-600 text-lg">Обучение проходит в малых группах до 8 человек</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-chess-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">♟️</span>
                </div>
                <CardTitle className="text-2xl">Начинающие</CardTitle>
                <CardDescription className="text-lg">Возраст: 5-7 лет</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-600 mr-3" size={20} />
                    Изучение основ игры
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-600 mr-3" size={20} />
                    Правила и ходы фигур
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-600 mr-3" size={20} />
                    Развитие логического мышления
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-600 mr-3" size={20} />
                    Игровая форма обучения
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">♚</span>
                </div>
                <CardTitle className="text-2xl">Продолжающие</CardTitle>
                <CardDescription className="text-lg">Возраст: 8-11 лет</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-600 mr-3" size={20} />
                    Тактические приемы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-600 mr-3" size={20} />
                    Основы стратегии
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-600 mr-3" size={20} />
                    Анализ партий
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-600 mr-3" size={20} />
                    Подготовка к турнирам
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Расписание занятий</h2>
            <p className="text-gray-600 text-lg">Удобное время для детей и родителей</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Calendar" className="mr-3 text-chess-gold" size={24} />
                    Будние дни
                  </CardTitle>
                  <CardDescription>Понедельник - Четверг</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-center items-center p-3 bg-white rounded-lg border">
                      <span className="font-medium">17:30 - 18:30</span>
                    </div>
                    <div className="flex justify-center items-center p-3 bg-white rounded-lg border">
                      <span className="font-medium">18:40 - 19:40</span>
                    </div>
                    <div className="flex justify-center items-center p-3 bg-white rounded-lg border">
                      <span className="font-medium">19:50 - 20:50</span>
                    </div>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <Icon name="Info" className="inline mr-2" size={16} />
                        По мере формирования групп возможны утренние часы занятий
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="CalendarDays" className="mr-3 text-chess-gold" size={24} />
                    Выходные дни
                  </CardTitle>
                  <CardDescription>Суббота или Воскресенье</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-center items-center p-3 bg-white rounded-lg border">
                      <span className="font-medium">11:00 - 12:00</span>
                    </div>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <Icon name="Info" className="inline mr-2" size={16} />
                        Время может варьироваться в зависимости от возрастной группы
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Стоимость занятий</h2>
            <p className="text-gray-600 text-lg">Доступные цены на качественное обучение</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 border-green-200 bg-green-50">
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gift" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl text-green-800">Пробное занятие</CardTitle>
                <CardDescription>Первое посещение</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-green-600 mb-4">БЕСПЛАТНО</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ Знакомство с преподавателем</li>
                  <li>✓ Оценка уровня ребенка</li>
                  <li>✓ Подбор подходящей группы</li>
                </ul>
                <a href="tel:89630133131" className="block w-full">
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    Записаться
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">Разовое занятие</CardTitle>
                <CardDescription>1 час обучения</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-blue-600 mb-4">600 ₽</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ Полноценное занятие</li>
                  <li>✓ Индивидуальный подход</li>
                  <li>✓ Домашние задания</li>
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-chess-gold bg-gradient-to-b from-yellow-50 to-orange-50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-chess-gold text-black font-semibold px-4 py-1">
                  ВЫГОДНО
                </Badge>
              </div>
              <CardHeader className="pt-6">
                <div className="w-16 h-16 bg-chess-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" className="text-black" size={32} />
                </div>
                <CardTitle className="text-2xl">Абонемент</CardTitle>
                <CardDescription>8 занятий в месяц</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-chess-gold mb-2">4000 ₽</div>
                <div className="text-sm text-gray-600 mb-4">500 ₽ за занятие</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ Экономия 800 рублей</li>
                  <li>✓ Регулярные занятия</li>
                  <li>✓ Быстрый прогресс</li>
                </ul>
                <a href="tel:89630133131" className="block w-full">
                  <Button className="w-full mt-4 bg-chess-gold hover:bg-chess-gold/90 text-black font-semibold">
                    Купить абонемент
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section id="tournaments" className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Турниры</h2>
            <p className="text-gray-300 text-lg">Практика и соревновательный опыт</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-700 border-gray-600 text-white">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-chess-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" className="text-black" size={40} />
                </div>
                <CardTitle className="text-3xl">Ежемесячные турниры</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Соревнования между учениками клуба
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-chess-gold">Что дают турниры:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Icon name="Target" className="text-chess-gold mr-3" size={20} />
                        Практический опыт игры
                      </li>
                      <li className="flex items-center">
                        <Icon name="Users" className="text-chess-gold mr-3" size={20} />
                        Социализация детей
                      </li>
                      <li className="flex items-center">
                        <Icon name="Award" className="text-chess-gold mr-3" size={20} />
                        Мотивация к обучению
                      </li>
                      <li className="flex items-center">
                        <Icon name="Brain" className="text-chess-gold mr-3" size={20} />
                        Развитие стрессоустойчивости
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-chess-gold">Формат проведения:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Icon name="Calendar" className="text-chess-gold mr-3" size={20} />
                        Каждый месяц
                      </li>
                      <li className="flex items-center">
                        <Icon name="Clock" className="text-chess-gold mr-3" size={20} />
                        Длительность: 2-3 часа
                      </li>
                      <li className="flex items-center">
                        <Icon name="Medal" className="text-chess-gold mr-3" size={20} />
                        Грамоты всем участникам
                      </li>
                      <li className="flex items-center">
                        <Icon name="Camera" className="text-chess-gold mr-3" size={20} />
                        Фото на память
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Контакты</h2>
            <p className="text-gray-600 text-lg">Свяжитесь с нами для записи на занятия</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" className="mr-3 text-chess-gold" size={24} />
                  Наш адрес
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Home" className="text-gray-600 mt-1" size={20} />
                  <div>
                    <p className="font-medium">г. Пермь</p>
                    <p className="text-gray-600">ул. Плеханова, д. 34а</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-gray-600" size={20} />
                  <div>
                    <p className="font-medium">Режим работы:</p>
                    <p className="text-gray-600">Пн-Чт: 17:00-21:00</p>
                    <p className="text-gray-600">Сб-Вс: 10:00-13:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Phone" className="mr-3 text-chess-gold" size={24} />
                  Связь с нами
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href="tel:8-963-013-31-31" className="block w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Icon name="Phone" className="mr-2" size={20} />
                    8-963-013-31-31
                  </Button>
                </a>
                <a href="https://t.me/OLARUDOMETOVA" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="outline" className="w-full">
                    <Icon name="Send" className="mr-2" size={20} />
                    Написать в Telegram
                  </Button>
                </a>
                <div className="text-center pt-4">
                  <div className="flex flex-col items-center space-y-2">
                    <p className="text-sm font-medium text-gray-700">QR-код сайта:</p>
                    <QRCodeComponent value={window.location.href} size={120} className="border rounded-lg p-2 bg-white" />
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Ответим в течение 15 минут в рабочее время
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-10 h-10 bg-chess-gold rounded-lg flex items-center justify-center">
              <span className="text-black text-xl">♔</span>
            </div>
            <h3 className="text-xl font-bold">Шахматный клуб "Интеллект"</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Развиваем интеллект через шахматы • г. Пермь, ул. Плеханова, 34а
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>© 2024 Шахматный клуб "Интеллект"</span>
          </div>
        </div>
      </footer>
    </div>
  );
}