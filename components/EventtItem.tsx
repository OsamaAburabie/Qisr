import {View, Text, Button} from 'react-native';
import {useMutation, useQueryClient} from 'react-query';
import axios from '../config/axios';
import React from 'react';

const EventtItem = ({id, title, joining, totalInvited, totalJoined}: any) => {
  const queryClient = useQueryClient();

  const {mutate} = useMutation(
    (joining: boolean) =>
      axios.post(`/api/student/join_event/${id}`, {joining}),
    {
      // onSuccess: data => {
      //   queryClient.invalidateQueries('events');
      // },
      onMutate: async (joining: boolean) => {
        await queryClient.cancelQueries('events');
        const preveousEvents = queryClient.getQueryData('events') as any;

        let foundEvent = preveousEvents?.data?.data?.events.find(
          (event: any) => event.id === id,
        );

        if (foundEvent) {
          foundEvent.joining = joining;
          foundEvent.totalJoined = joining
            ? foundEvent.totalJoined + 1
            : foundEvent.totalJoined - 1;
        }

        queryClient.setQueryData('events', (oldEvents: any) => {
          return {
            ...oldEvents,
            foundEvent,
          };
        });

        return {
          preveousEvents,
        };
      },

      onError: (_err: any, joining, context: any) => {
        let foundEvent = context.preveousEvents?.data?.data?.events.find(
          (event: any) => event.id === id,
        );

        if (foundEvent) {
          foundEvent.joining = !joining;
          foundEvent.totalJoined = !joining
            ? foundEvent.totalJoined + 1
            : foundEvent.totalJoined - 1;
        }
        queryClient.setQueryData('events', (oldEvents: any) => {
          return {
            ...oldEvents,
            foundEvent,
          };
        });
      },
    },
  );

  return (
    <View>
      <Text style={{color: '#333'}}>{title}</Text>
      <Text style={{color: '#333'}}>{totalInvited + '/' + totalJoined}</Text>
      <Button
        title={`
        ${joining ? 'Leave' : 'Join'}
      `}
        onPress={() => mutate(!joining)}
      />
    </View>
  );
};

export default EventtItem;
