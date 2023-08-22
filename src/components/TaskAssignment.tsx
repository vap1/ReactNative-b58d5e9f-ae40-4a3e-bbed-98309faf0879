
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { APIData, TaskDetails, UserRegistrationResponse } from './backendAPI';

const TaskAssignment: React.FC = () => {
  const [tasks, setTasks] = useState<TaskDetails[]>([]);

  useEffect(() => {
    // Fetch tasks from the backend API
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response: APIData<UserRegistrationResponse> = await fetch('https://api.example.com/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const renderItem = ({ item }: { item: TaskDetails }) => (
    <TouchableOpacity onPress={() => handleTaskPress(item)}>
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>{item.status}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleTaskPress = (task: TaskDetails) => {
    // Handle task press action
  };

  return (
    <View>
      <Text>Task Assignment</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TaskAssignment;