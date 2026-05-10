import { Modal, ModalContent, ModalHeader, ModalBody, RadioGroup, Radio } from "@heroui/react";
import { themes } from "../themes";

interface Props {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  currentTheme: string;
  onThemeChange: (id: string) => void;
}

export default function SettingsModal({ isOpen, onOpenChange, currentTheme, onThemeChange }: Props) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Настройки</ModalHeader>
        <ModalBody className="pb-6">
          <RadioGroup
            label="Тема оформления"
            value={currentTheme}
            onValueChange={onThemeChange}
          >
            {themes.map((t) => (
              <Radio key={t.id} value={t.id}>
                {t.label}
              </Radio>
            ))}
          </RadioGroup>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
