import {LocaleConfig} from 'react-native-calendars';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';


    const App = () => {
        const [selected, setSelected] = useState('');
      
        return (
          <Calendar
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              height: 350,
            }}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e',
            }}
            />
  );
};

export default App;