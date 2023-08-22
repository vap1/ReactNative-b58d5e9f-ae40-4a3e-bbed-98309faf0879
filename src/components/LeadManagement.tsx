
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { LeadDetails, UserRegistrationResponse } from './api/types';
import { getLeads } from './api/leads';

const LeadManagement: React.FC = () => {
  const [leads, setLeads] = useState<LeadDetails[]>([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response: UserRegistrationResponse = await getLeads();
      if (response.success) {
        setLeads(response.data);
      } else {
        console.error(response.errorMessage);
      }
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  const renderLeadItem = ({ item }: { item: LeadDetails }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.contact}</Text>
      {/* Render other lead details */}
    </View>
  );

  return (
    <View>
      <Text>Lead Management</Text>
      <FlatList
        data={leads}
        renderItem={renderLeadItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default LeadManagement;