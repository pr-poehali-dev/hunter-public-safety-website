import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Shield" className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary leading-tight">Охотники на Демонов</h1>
              <p className="text-xs text-muted-foreground">Общественной Безопасности</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#mission" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              О миссии
            </a>
            <a href="#training" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Обучение
            </a>
            <a href="#benefits" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Льготы
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          <Button asChild className="hidden md:flex">
            <a href="#contact">Подать заявку</a>
          </Button>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-accent text-accent-foreground">Министерство обороны Японии</Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Защита граждан — наш долг
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Официальная государственная организация по борьбе с демоническими угрозами. 
            Присоединяйтесь к элитному отряду охотников.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild className="shadow-lg">
              <a href="#contact">Стать охотником</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#mission">Узнать больше</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-4xl font-bold text-primary">2,847</CardTitle>
                <CardDescription>Активных охотников</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="text-accent" size={32} />
                </div>
                <CardTitle className="text-4xl font-bold text-accent">98.7%</CardTitle>
                <CardDescription>Успешных операций</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-4xl font-bold text-primary">24/7</CardTitle>
                <CardDescription>Круглосуточная защита</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4">О миссии организации</h3>
            <p className="text-lg text-muted-foreground">
              История и цели Охотников на Демонов Общественной Безопасности
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Icon name="BookOpen" className="text-primary" size={24} />
                </div>
                <CardTitle>История создания</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Организация была основана правительством Японии в ответ на возрастающую угрозу демонов. 
                  Мы объединяем лучших специалистов для защиты мирных граждан от сверхъестественных опасностей.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                  <Icon name="Crosshair" className="text-accent" size={24} />
                </div>
                <CardTitle>Наша цель</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Полное искоренение демонической угрозы на территории Японии. Мы работаем над созданием безопасного 
                  общества, где граждане могут жить без страха перед сверхъестественным.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Icon name="Shield" className="text-primary" size={24} />
                </div>
                <CardTitle>Методы работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Используем как человеческих охотников, так и контролируемых демонов для борьбы с угрозами. 
                  Строгая иерархия и дисциплина обеспечивают эффективность каждой операции.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                  <Icon name="Globe" className="text-accent" size={24} />
                </div>
                <CardTitle>Международное сотрудничество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Наша организация сотрудничает с международными агентствами по борьбе с демонами, 
                  обмениваясь опытом и технологиями для глобальной безопасности.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="training" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4">Программы обучения</h3>
            <p className="text-lg text-muted-foreground">
              От новичка до элитного охотника — структурированные курсы для всех уровней
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Начальный курс</Badge>
                <CardTitle className="text-2xl">Базовая подготовка охотников</CardTitle>
                <CardDescription className="text-base">6 месяцев интенсивного обучения</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Физическая подготовка и боевые искусства</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Теория демонологии и классификация угроз</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Работа со специализированным оружием</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Психологическая устойчивость в экстремальных условиях</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-accent text-accent-foreground">Продвинутый курс</Badge>
                <CardTitle className="text-2xl">Специализация</CardTitle>
                <CardDescription className="text-base">3 месяца углубленной подготовки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Тактика работы с контрактными демонами</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Командование полевыми операциями</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Экстренная медицинская помощь в бою</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Анализ и нейтрализация особых угроз класса S</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary/80 text-primary-foreground">Элитный курс</Badge>
                <CardTitle className="text-2xl">Лидерство и стратегия</CardTitle>
                <CardDescription className="text-base">Для опытных охотников</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Управление отрядами и координация операций</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Стратегическое планирование и анализ рисков</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Межведомственное взаимодействие</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Работа с секретной информацией высшего уровня</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-accent/80 text-accent-foreground">Непрерывное развитие</Badge>
                <CardTitle className="text-2xl">Повышение квалификации</CardTitle>
                <CardDescription className="text-base">Регулярные тренинги и семинары</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Ежемесячные практические учения</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Изучение новых типов демонов и методов борьбы</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Обмен опытом с международными коллегами</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Доступ к закрытым архивам и исследованиям</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4">Почему работать у нас</h3>
            <p className="text-lg text-muted-foreground">
              Государственные льготы и привилегии для охотников на демонов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Banknote" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">Высокая зарплата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Конкурентная оплата труда в 3-5 раз выше средней по стране. Премии за успешные операции.
                </p>
                <Badge variant="outline" className="text-primary border-primary">от ¥450,000/мес</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Heart" className="text-accent" size={28} />
                </div>
                <CardTitle className="text-xl">Медицинское обслуживание</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Полный пакет медицинского страхования для вас и вашей семьи. Доступ к лучшим клиникам Японии.
                </p>
                <Badge variant="outline" className="text-accent border-accent">100% покрытие</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Home" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">Жилищная программа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Государственная поддержка при покупке жилья. Льготная ипотека под 0.5% годовых.
                </p>
                <Badge variant="outline" className="text-primary border-primary">Субсидия до ¥10M</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Plane" className="text-accent" size={28} />
                </div>
                <CardTitle className="text-xl">Отпуск и отдых</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  45 дней оплачиваемого отпуска в год. Путевки в санатории и дома отдыха для охотников.
                </p>
                <Badge variant="outline" className="text-accent border-accent">45 дней/год</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="GraduationCap" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">Образование детей</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Бесплатное обучение детей охотников в лучших школах и университетах страны.
                </p>
                <Badge variant="outline" className="text-primary border-primary">Полностью бесплатно</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Award" className="text-accent" size={28} />
                </div>
                <CardTitle className="text-xl">Социальный статус</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Уважение в обществе, государственные награды. Приоритетное обслуживание в госучреждениях.
                </p>
                <Badge variant="outline" className="text-accent border-accent">Особый статус</Badge>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-primary text-primary-foreground border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Программа защиты семей</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Семьи охотников находятся под круглосуточной государственной защитой. 
                В случае гибели охотника на службе — пожизненная пенсия и полная поддержка семьи.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge className="bg-primary-foreground text-primary">24/7 охрана</Badge>
                <Badge className="bg-primary-foreground text-primary">Пожизненная пенсия</Badge>
                <Badge className="bg-primary-foreground text-primary">Психологическая поддержка</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4">Стать охотником</h3>
            <p className="text-lg text-muted-foreground">
              Заполните форму и наш отдел кадров свяжется с вами в течение 24 часов
            </p>
          </div>
          <Card className="border-2">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Полное имя *
                  </label>
                  <Input
                    id="name"
                    placeholder="Фамилия Имя Отчество"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Расскажите о себе
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Опыт работы, физическая подготовка, мотивация..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="border-2"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных в соответствии с законодательством Японии
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <CardTitle className="text-lg">Главный офис</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Токио, район Тиёда<br />
                  Касумигасеки 2-1-2<br />
                  Здание Министерства обороны
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="text-accent" size={20} />
                  </div>
                  <CardTitle className="text-lg">Телефон горячей линии</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Экстренная связь: 03-1234-5678<br />
                  Отдел кадров: 03-1234-5679<br />
                  Круглосуточно, без выходных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h4 className="text-xl font-bold mb-2">Охотники на Демонов</h4>
              <p className="text-sm text-primary-foreground/80">Общественной Безопасности</p>
              <p className="text-xs text-primary-foreground/60 mt-2">
                © 2026 Министерство обороны Японии
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Icon name="FileText" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
