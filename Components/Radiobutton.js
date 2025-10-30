import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useState,useMemo} from 'react'
// import { RadioGroup, RadioButton } from 'react-native-radio-buttons-group';

export const RadioButtonSortby = () => {

    const [selectedId, setSelectedId] = useState();

    const radioButtonsSortData = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Top Rated',
            value: 'option1'
        },
        {
            id: '2',
            label: 'Cost: Low to High',
            value: 'option2'
        },
        {
            id: '3', // acts as primary key, should be unique and non-empty string
            label: 'Cost: High to Low',
            value: 'option3'
        },
        {
            id: '4',
            label: 'Fast Delivery',
            value: 'option4'
        }
    ]), []);

  return (
    <View>

<RadioButtonRN

  data={radioButtonsSortData}
  selectedBtn={(e) => console.log(e)}
  style={styles.radioStyling}
  box={false}
  activeColor={'green'}
  circleSize={15}
  animationTypes={['zoomin']}
  duration={1000}
  // boxActiveBgColor={'blue}
/>
         
    </View>
  )
}

 export const RadioButtonRating = () => {

    const [selectedId, setSelectedId] = useState();

    const radioButtonsRatingData = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            // label: 'Top Rated',
            value: 'option1',
            // image: require('../Assets/Images/onestar.png')
        },
        {
            id: '2',
            // label: 'Cost: Low to High',
            value: 'option2'
        },
        {
            id: '3', // acts as primary key, should be unique and non-empty string
            // label: 'Cost: High to Low',
            value: 'option3'
        },
        {
            id: '4',
            // label: 'Fast Delivery',
            value: 'option4'
        },
        {
            id: '5',
            // image: require('../Assets/Images/fivestar.png'),
            value: 'option5'
        },
    ]), []);

  return (
    <View style={{flexDirection: 'row', marginLeft: 20}}>

<RadioButtonRN

  data={radioButtonsRatingData}
  selectedBtn={(e) => console.log(e)}
  style={styles.radioStyling}
  box={false}
  activeColor={'green'}
  circleSize={15}
  animationTypes={['zoomin']}
  duration={1000}
  // boxActiveBgColor={'blue}
/>
<View>
  <Image source={require('../Assets/Images/onestar.png')} style={styles.ratingimagestyle}  resizeMode='contain'/>
  <Image source={require('../Assets/Images/twostar.png')} style={styles.ratingimagestyle}  resizeMode='contain'/>
  <Image source={require('../Assets/Images/threestar.png')} style={styles.ratingimagestyle}  resizeMode='contain'/>
  <Image source={require('../Assets/Images/fourstar.png')} style={styles.ratingimagestyle}  resizeMode='contain'/>
  <Image source={require('../Assets/Images/fivestar.png')} style={styles.ratingimagestyle}  resizeMode='contain'/>
</View>
         
    </View>
  )
}

export const RadioButtonOffers = () => {

    const [selectedId, setSelectedId] = useState();

    const radioButtonsOfferData = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: '50 %',
            value: 'option1'
        },
        {
            id: '2',
            label: '40 %',
            value: 'option2'
        },
        {
            id: '3', // acts as primary key, should be unique and non-empty string
            label: '30 %',
            value: 'option3'
        },
        // {
        //     id: '4',
        //     label: 'Fast Delivery',
        //     value: 'option4'
        // }
    ]), []);

  return (
    <View>

<RadioButtonRN

  data={radioButtonsOfferData}
  selectedBtn={(e) => console.log(e)}
  style={styles.radioStyling}
  box={false}
  activeColor={'green'}
  circleSize={15}
  animationTypes={['zoomin']}
  duration={1000}
  // boxActiveBgColor={'blue}
/>
         
    </View>
  )
}

export const RadioButtonSubscription = () => {

  const [selectedId, setSelectedId] = useState();

  const radioButtonsSubscriptionData = useMemo(() => ([
      {
          id: '1', // acts as primary key, should be unique and non-empty string
          label: 'Weekly',
          value: 'option1'
      },
      {
          id: '2',
          label: 'Monthly',
          value: 'option2'
      }

  ]), []);

return (
  <View>

<RadioButtonRN

data={radioButtonsSubscriptionData}
selectedBtn={(e) => console.log(e)}
style={styles.radioStyling}
box={false}
activeColor={'green'}
circleSize={15}
animationTypes={['zoomin']}
duration={1000}
// boxActiveBgColor={'blue'}
/>
       
  </View>
)
}

// export default RadioButtonComp

const styles = StyleSheet.create({
  radioStyling: {
    // height: 30,
    marginHorizontal: 20,
    marginBottom: 5
  },
  ratingimagestyle: {
    width: 100,
    height: 34.5
  }
})
