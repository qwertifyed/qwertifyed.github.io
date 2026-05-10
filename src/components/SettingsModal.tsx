import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import { themes } from "../themes";

interface Props {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  currentTheme: string;
  onThemeChange: (id: string) => void;
}

export default function SettingsModal({ isOpen, onOpenChange, currentTheme, onThemeChange }: Props) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" placement="center">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Настройки</ModalHeader>
        <ModalBody className="pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => onThemeChange(t.id)}
                className={`relative rounded-xl border-2 p-4 text-left transition-all duration-200 cursor-pointer ${
                  currentTheme === t.id
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-default-200 hover:border-default-400"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`size-3 rounded-full ${t.group === "dark" ? "bg-default-900" : "bg-default-50"} ring-1 ring-default-300`} />
                  <span className="font-semibold text-sm">{t.label}</span>
                  {t.group === "dark" && (
                    <span className="ml-auto text-xs text-default-400">тёмная</span>
                  )}
                  {t.group === "light" && (
                    <span className="ml-auto text-xs text-default-400">светлая</span>
                  )}
                </div>

                <div className={`rounded-lg p-3 border ${t.group === "dark" ? "bg-default-900 border-default-700" : "bg-white border-default-200"}`}>
                  <div className="flex gap-2 mb-2">
                    <div className={`h-2 w-16 rounded ${t.group === "dark" ? "bg-default-600" : "bg-default-300"}`} />
                    <div className={`h-2 w-8 rounded ${t.group === "dark" ? "bg-default-700" : "bg-default-200"} ml-auto`} />
                  </div>
                  <div className="flex gap-2 mb-2">
                    <div className="h-4 w-full rounded bg-primary" />
                  </div>
                  <div className="flex gap-2">
                    <div className={`h-2 w-12 rounded ${t.group === "dark" ? "bg-default-600" : "bg-default-300"}`} />
                    <div className={`h-2 w-12 rounded ${t.group === "dark" ? "bg-default-700" : "bg-default-200"}`} />
                  </div>
                </div>

                {currentTheme === t.id && (
                  <div className="absolute top-3 right-3 size-5 bg-primary rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 20 20" fill="white" className="size-3">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
