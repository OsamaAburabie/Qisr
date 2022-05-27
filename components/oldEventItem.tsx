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
        const preveousEvents = queryClient.getQueryData('events');
        queryClient.setQueryData('events', (oldEvents: any) => {
          return {
            ...oldEvents,
            data: {
              ...oldEvents.data,
              events: oldEvents.data.data.events.map((event: any) => {
                if (event.id === id) {
                  event.joining = joining;
                  event.totalJoined = joining
                    ? event.totalJoined + 1
                    : event.totalJoined - 1;

                  return event;
                }
              }),
            },
          };
        });
        return {
          preveousEvents,
        };
      },

      onError: (_err: any, _joining, context) => {
        queryClient.setQueryData('events', context?.preveousEvents);
      },
      onSettled: (data: any) => {
        queryClient.invalidateQueries('events');
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
