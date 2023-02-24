import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {BlackColor, PrimaryColor} from '../../../../utility/colorConstants';
import CustomText from '../../../components/custom_text';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import GstValidation from './GstValidation';
import PickUpDetails from './PickUpDetails';
import BankAccountDetails from './BankAccountDetails';
import BasicDetails from './BasicDetails';

const Stepper = ({currentStep = 1, numberOfSteps = 4, title, iconName}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: PrimaryColor,
            borderRadius: 25,
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {iconName}
          {/* <Icon name={iconName} size={25} color={PrimaryColor} /> */}
        </View>
        <View>
          <CustomText
            style={{
              color: '#636363',
              fontSize: 14,
              fontFamily: 'Raleway-SemiBold',
            }}>
            STEP {currentStep + 1}
          </CustomText>
          <CustomText
            style={{
              color: BlackColor,
              fontSize: 16,
              fontFamily: 'Raleway-SemiBold',
            }}>
            {title}
          </CustomText>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: '#C5C6CC',
          height: 2,
          marginTop: 20,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: PrimaryColor,
            width: `${(100 / numberOfSteps) * (currentStep + 1)}%`,
            height: 2,
          }}></View>
      </View>
    </>
  );
};

const StepperData = [
  {
    title: 'GST Details',
    icon: <Icon1 name="money-bill" size={30} color={PrimaryColor} />,
  },
  {
    title: 'Pick Up Address',
    icon: <Icon2 name="location-on" size={30} color={PrimaryColor} />,
  },
  {
    title: 'Bank Account Details',
    icon: <Icon name="bank" size={30} color={PrimaryColor} />,
  },
  {
    title: 'Merchant Details',
    icon: <Icon1 name="user-edit" size={30} color={PrimaryColor} />,
  },
];

const RegisterAccount = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(StepperData[currentStep]);
  }, [currentStep]);

  return (
    <View
      style={{
        width: '100%',
        padding: 20,
        backgroundColor: '#FFFFFF',
        height: '100%',
      }}>
      <ScrollView>
        <View style={{marginTop: 20, flex: 1}}>
          <CustomText
            style={{
              color: BlackColor,
              fontSize: 20,
              fontFamily: 'Raleway-SemiBold',
            }}>
            Complete Account Details
          </CustomText>

          <Stepper
            currentStep={currentStep}
            title={data?.title}
            iconName={data?.icon}
          />

          {currentStep === 0 ? (
            <GstValidation
              onNext={() => {
                setCurrentStep(1);
              }}
            />
          ) : currentStep === 1 ? (
            <PickUpDetails
              onNext={() => {
                setCurrentStep(2);
              }}
            />
          ) : currentStep === 2 ? (
            <BankAccountDetails
              onNext={() => {
                setCurrentStep(3);
              }}
            />
          ) : (
            <BasicDetails
              onNext={() => {
                setCurrentStep(1);
              }}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterAccount;
