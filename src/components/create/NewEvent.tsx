import React from 'react';
import {
  View,
} from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
  }),
  PaperTextInput: typeof TextInput = TextInput;

function NewEvent () {
  const {
      handleSubmit,
      control,
    } = useForm({
      resolver: zodResolver(schema),
    }),
    onSubmit = handleSubmit((data) => {
      // TODO: Submit data to API
      // eslint-disable-next-line no-console
      console.log('submit', data);
    });

  return (
    <View>
      <Text>
        New Event
      </Text>

      <form onSubmit={onSubmit}>
        <View>
          <Controller
            control={control}
            name='title'
            rules={{ required: 'Title is required' }}
            render={}
          />

          <Controller
            control={control}
            name='description'
            rules={{ required: 'Description is required' }}
            render={({ field }) => (
              <TextInput label='Description' onChangeText={field.onChange} numberOfLines={5} style={{ borderWidth: 1, borderColor: 'black' }} multiline />
            )}
          />

          <Controller
            control={control}
            name='city'
            render={({ field }) => (
              <TextInput label='City' onChange={field.onChange} style={{ borderWidth: 1, borderColor: 'black' }} />
            )}
          />

          <Controller
            control={control}
            name='state'
            render={({ field }) => (
              <TextInput label='State' onChange={field.onChange} maxLength={2} style={{ borderWidth: 1, borderColor: 'black' }} />
            )}
          />

          <Controller
            control={control}
            name='venue'
            render={({ field }) => (
              <TextInput label='Venue' onChange={field.onChange} style={{ borderWidth: 1, borderColor: 'black' }} />
            )}
          />

          <Controller
            control={control}
            name='date'
            render={({ field }) => (
              <TextInput label='Date' onChange={field.onChange} style={{ borderWidth: 1, borderColor: 'black' }} />
            )}
          />

          <Controller
            control={control}
            name='time'
            render={({ field }) => (
              <TextInput label='Time' onChange={field.onChange} style={{ borderWidth: 1, borderColor: 'black' }} />
            )}
          />

          <Controller
            control={control}
            name='notes'
            render={({ field }) => (
              <TextInput label='Notes' onChange={field.onChange} numberOfLines={5} style={{ borderWidth: 1, borderColor: 'black' }} multiline />
            )}
          />

          <Button title='Submit' onPress={onSubmit} />
        </View>

      </form>
    </View>
  );
}

export default NewEvent;
