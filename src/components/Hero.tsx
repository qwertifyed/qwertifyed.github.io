import { useState, useEffect } from "react";
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Divider } from "@heroui/react";
import { applyTheme, getStoredTheme } from "../themes";
import SettingsModal from "./SettingsModal";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(getStoredTheme);

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

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
            <Button isIconOnly variant="light" aria-label="Настройки" onPress={() => setIsSettingsOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.7 7.7 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.9 6.9 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.9 6.9 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.9 6.9 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
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

      <SettingsModal
        isOpen={isSettingsOpen}
        onOpenChange={setIsSettingsOpen}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
      />
    </div>
  );
}
