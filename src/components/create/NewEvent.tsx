import React from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
});

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
            render={({ field }) => (
              <>
                <Text>Title:</Text>
                <TextInput onChange={field.onChange} style={{ borderWidth: 1, borderColor: 'black' }} />
              </>
            )}
          />

          <Controller
            control={control}
            name='description'
            rules={{ required: 'Description is required' }}
            render={({ field }) => (
              <>
                <Text>Description:</Text>
                <TextInput onChange={field.onChange} numberOfLines={5} style={{ borderWidth: 1, borderColor: 'black' }} multiline />
              </>
            )}
          />

          <Controller
            control={control}
            name='City'
            render={({ field }) => (
              <>
                <Text>City:</Text>
                <TextInput onChange={field.onChange} style={{ borderWidth: 1, borderColor: 'black' }} />
              </>
            )}
          />

          <Controller
            control={control}
            name='state'
            render={({ field }) => (
              <>
                <Text>State:</Text>
                <TextInput onChange={field.onChange} maxLength={2} style={{ borderWidth: 1, borderColor: 'black' }} />
              </>
            )}
          />

          <Controller
            control={control}
            name='state'
            render={({ field }) => (
              <>
                <Text>Venue: (Optional)</Text>
                <TextInput onChange={field.onChange} style={{ borderWidth: 1, borderColor: 'black' }} />
              </>
            )}
          />

          <Controller
            control={control}
            name='Date'
            render={({ field }) => (
              <>
                <Text>Date:</Text>
                <TextInput onChange={field.onChange} style={{ borderWidth: 1, borderColor: 'black' }} />
              </>
            )}
          />

          <Controller
            control={control}
            name='Time'
            render={({ field }) => (
              <>

                <Text>Time:</Text>
                <TextInput onChange={field.onChange} style={{ borderWidth: 1, borderColor: 'black' }} />
              </>
            )}
          />

          <Controller
            control={control}
            name='Notes'
            render={({ field }) => (
              <>
                <Text>Notes:</Text>
                <TextInput onChange={field.onChange} numberOfLines={5} style={{ borderWidth: 1, borderColor: 'black' }} multiline />
              </>
            )}
          />

          <Button title='Submit' onPress={onSubmit} />
        </View>

      </form>
    </View>
  );
}

export default NewEvent;
