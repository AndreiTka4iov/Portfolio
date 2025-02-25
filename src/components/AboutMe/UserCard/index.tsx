import { Card, Image, Text } from "@mantine/core";
import styles from "./styles.module.css";

export function UserCard() {
  return (
    <Card withBorder p={0} radius="md" className={styles.card}>
      <Image src="https://img.hhcdn.ru/photo/763086298.jpeg?t=1740572725&h=IINYCTdJVY3QP4G5hr1cxg" alt="Photo" w={250} maw={"100%"} />
      <div className={styles.bottomBlock}>
        <Text ta="center" fz="md" fw={500} style={styles}>
          Andrei Tkachev
        </Text>

        <Text ta="center" fz="xs" c="dimmed">
          Fullstack developer
        </Text>
      </div>
    </Card>
  );
}
