import {MantineProvider, Text, Stack, Group, Button} from "@mantine/core";
import { Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { theme } from "./theme";
import { Slider } from '@mantine/core';

export default function App() {
    const form = useForm({
        // initialValues: {
        //     email: '',
        //     termsOfService: false,
        // },

        // validate: {
        //     email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        // },
    });

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Stack align="center" mt={50}>
          <Box sx={{ maxWidth: 700 }} mx="auto">
              <Text size="xl" weight={500}>
                  Digital soul
              </Text>
              <br/>
              <Text size="md" weight={500}>
                  Opencv - https://opencv.org/ - инструмент для распознавания объектов
              </Text>
              <br/>
              <Text size="md" weight={500}>
                  Цифровая душа - связывает предмет физического мира с его цифровым представлением. С его историей.
              </Text>
              <br/>
              <Text size="md" weight={500}>
                  Как это работает:<br/>
                  - нажми `создать душу`<br/>
                  - -- создается светящийся светлячек желто-белого цвета<br/><br/>
                  - нажми `поселить душу в предмет`<br/>
                  - -- откроется камера и нужно будет сфоткать предмет со всех сторон<br/>
                  - зачем предмету душа?<br/>
                  - -- даже если все в этом мире забудут истории предмета, душа будет помнить их.<br/><br/>
                  - нажмите `Дать предмету индивидуальность!`<br/>
                  - (открывается страница, которая проведет по вопросам пошагово)<br/>
                  - -- какое у предмета имя?<br/>
                  - -- --- Грузинская Кружка Димы<br/>
                  - -- когда `Грузинская Кружка Димы` обрел(а) жизнь?<br/>
                  - -- --- 15 декабря 2020<br/>
                  - -- для чего предмет пришел в мир?<br/>
                  - -- --- Что бы напоминать Диме о изумительной Грузии, когда он попивает кофе.<br/><br/>
                  - нажмите `Наполнить предмет с душей историями`<br/>
                  - -- выбирете вариант истории:<br/>
                  - -- --- Картинки/видео/голосовое сообщение/текст<br/>
                  - -- добавьте контент<br/>
                  - -- --- [цифровой контент]<br/>
              </Text>
              <br/>
              {/*https://mantine.dev/form/use-form/*/}
              <form onSubmit={form.onSubmit((values) => console.log(values))}>
                  <Group position="right" mt="md">
                      <Button type="submit">Создать душу</Button>
                  </Group>
              </form>
          </Box>
      </Stack>
    </MantineProvider>
  );
}
