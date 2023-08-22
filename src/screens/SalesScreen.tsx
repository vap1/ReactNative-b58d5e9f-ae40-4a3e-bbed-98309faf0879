
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { FrontendService, LeadDetails } from 'com.example.api';

const SalesScreen: React.FC = () => {
  const [leads, setLeads] = useState<LeadDetails[]>([]);

  useEffect(() => {
    // Fetch leads from the backend API
    const fetchLeads = async () => {
      try {
        const response = await FrontendService.leads({});
        if (response.success) {
          setLeads(response.data);
        } else {
          console.error(response.errorMessage);
        }
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };

    fetchLeads();
  }, []);

  return (
    <View>
      <Text>Sales Screen</Text>
      <FlatList
        data={leads}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.status}</Text>
            {/* Render other lead details */}
          </View>
        )}
      />
    </View>
  );
};

export default SalesScreen;