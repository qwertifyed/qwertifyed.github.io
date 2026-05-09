import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Divider } from "@heroui/react";
import { useState } from "react";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Главная", "Проекты", "Блог", "Контакты"];

  return (
    <div className="min-h-screen">
      <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} maxWidth="xl">
        <NavbarContent>
          <NavbarMenuToggle className="sm:hidden" />
          <NavbarBrand>
            <p className="font-bold text-inherit">qwertifyed</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item}>
              <Link color="foreground" href="#">
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Войти
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item}>
              <Link color="foreground" className="w-full" href="#" size="lg">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <main className="mx-auto max-w-2xl px-6">
        <section className="flex flex-col items-center justify-center text-center py-32 sm:py-48 lg:py-56">
          <div className="rounded-xl border border-default-200 bg-default-50 px-4 py-1.5 text-sm text-default-600 mb-8">
            Новый проект запущен
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-default-900 sm:text-6xl">
            qwertifyed
          </h1>

          <p className="mt-6 text-lg text-default-500 max-w-lg">
            Разработка, творчество и open-source. Делаем веб лучше.
          </p>

          <Divider className="my-8 max-w-xs" />

          <div className="flex items-center gap-4">
            <Button color="primary" size="lg">
              Начать
            </Button>
            <Button variant="bordered" size="lg">
              Подробнее
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-default-100">
        <div className="mx-auto max-w-2xl px-6 py-8 text-center text-sm text-default-400">
          &copy; {new Date().getFullYear()} qwertifyed
        </div>
      </footer>
    </div>
  );
}
