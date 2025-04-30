import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import {WhiteColor} from '../../../../utility/colorConstants';
import CustomText from '../../../components/custom_text';
import ProductContainer from '../products/ProductContainer';
import {
  DangerIcon,
  DownwardGif,
  FashoIcon,
  NotificationIcon,
  ProfileCircleIcon,
  RefundIcon,
  SalesNegIcon,
  SalesPosIcon,
  SettlementIcon,
  StarIcon,
  SuccessGif,
  VisitorsIcon,
} from '../../../../utility/assetsManager';
import CustomButton from '../../../components/custom_button';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const HeaderRightContainer = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
      <Image
        source={NotificationIcon}
        style={{
          width: 25,
          height: 25,
          resizeMode: 'contain',
        }}
      />

      <Image
        source={ProfileCircleIcon}
        style={{
          width: 25,
          height: 25,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

const IconContainer = ({icon, title, backgroundRequired, backgroundColor}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
      <View
        style={{
          width: 30,
          height: 30,
          backgroundColor: 'black',
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={icon}
          style={{
            width: 15,
            height: 15,
            resizeMode: 'contain',
          }}
        />
      </View>
      <CustomText
        style={{fontSize: 15, fontFamily: 'Poppins-Medium', color: '#181815'}}>
        {title}
      </CustomText>
    </View>
  );
};

const SalesContainer = ({profit = true}) => {
  return (
    <View
      style={{
        backgroundColor: profit ? '#cef362' : '#F44545',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 5,
        marginTop: 10,
        borderColor: '#eaeaea',
        borderWidth: 1,
        position: 'relative',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}>
      <IconContainer
        title={'Total sales'}
        icon={profit ? SalesPosIcon : SalesNegIcon}
      />
      <CustomText
        style={{
          fontSize: 24,
          fontFamily: 'Poppins-Medium',
          color: '#181815',
          marginTop: 10,
        }}>
        ₹10,000.00
      </CustomText>

      <Image
        source={profit ? SuccessGif : DownwardGif}
        style={{
          resizeMode: 'contain',
          position: 'absolute',
          right: 0,
          transform: [{rotate: profit ? '0deg' : '180deg'}],
        }}
      />

      <View style={{flexDirection: 'row', gap: 15}}>
        <CustomText
          style={{
            fontSize: 14,
            fontFamily: 'Poppins-Regular',
            color: '#181815',
          }}>
          20.9%
        </CustomText>
        <CustomText
          style={{
            fontSize: 14,
            fontFamily: 'Poppins-Regular',
            color: '#181815',
          }}>
          + 18.4k this week
        </CustomText>
      </View>
    </View>
  );
};

const Container = ({icon, title, value, includecompare = true}) => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        padding: 20,
        borderColor: '#eaeaea',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        position: 'relative',
      }}>
      <IconContainer title={title} icon={icon} />
      <CustomText
        style={{
          fontSize: 24,
          fontFamily: 'Poppins-Medium',
          color: '#181815',
          marginTop: 10,
        }}>
        {value}
      </CustomText>
      {includecompare ? (
        <View style={{flexDirection: 'row', gap: 15}}>
          <CustomText
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              color: '#181815',
            }}>
            20.9%
          </CustomText>
          <CustomText
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              color: '#181815',
            }}>
            + 18.4k this week
          </CustomText>
        </View>
      ) : null}
    </View>
  );
};
const productList = new Array(5).fill(10);
const HeaderLogo = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'black',
          borderRadius: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={FashoIcon}
          style={{
            width: 40,
            height: 40,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View>
        <CustomText
          style={{
            color: '#7E7669',
            fontSize: 12,
            fontFamily: 'Poppins-Regular',
          }}>
          Pick up
        </CustomText>
        <CustomText
          style={{
            color: '#000000',
            fontSize: 14,
            fontFamily: 'Poppins-Medium',
          }}>
          Shop Name
        </CustomText>
      </View>
    </View>
  );
};

const HomeIndex = () => {
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <Header
        headerTitleRequired={false}
        leftComponent={<HeaderLogo />}
        rightComponent={<HeaderRightContainer />}
      />
      <ScrollView
        style={{
          paddingHorizontal: 20,
          marginTop: 10,
        }}>
        <CustomText
          style={{
            color: '#131313',
            fontSize: 20,
            fontFamily: 'Poppins-Medium',
          }}>
          Welcome back, Jenny
        </CustomText>
        <CustomText
          style={{
            color: '#868686',
            fontSize: 13,
            fontFamily: 'Poppins-Regular',
          }}>
          Here's what's happening with the store today.
        </CustomText>

        <View
          style={{
            borderWidth: 1,
            borderColor: '#ffd4a8',
            backgroundColor: '#fff5eb',
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <Image
              source={DangerIcon}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
              }}
            />
            <CustomText
              style={{
                fontSize: 16,
                fontFamily: 'Poppins-Medium',
                color: '#181815',
              }}>
              Orders fulfillment
            </CustomText>
          </View>
          <CustomText
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              color: '#181815',
              marginLeft: 35,
            }}>
            10 orders pending to be fulfilled.
          </CustomText>
          <CustomButton
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#cfd6dd',
              borderWidth: 1,
              width: 120,
              height: 40,
              marginTop: 10,
              paddingHorizontal: 2,
              paddingVertical: 5,
              marginLeft: 35,
            }}
            title={'Fullfill now'}
            textStyle={{
              fontSize: 14,
              color: '#181815',
            }}
          />
        </View>

        <SalesContainer />
        <Container
          title={'Settlement Pending'}
          icon={SettlementIcon}
          value={'₹8,000.00'}
          includecompare={false}
        />
        <Container title={'Total orders'} icon={StarIcon} value={'8,000'} />
        <Container title={'Return orders'} icon={RefundIcon} value={'100'} />

        <View style={{marginTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <CustomText
              style={{
                fontSize: 16,
                fontFamily: 'Poppins-Medium',
                color: '#181815',
              }}>
              Revenue vs Orders
            </CustomText>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: '#143b43',
                  }}></View>
                <CustomText
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                    color: '#181815',
                  }}>
                  Revenue
                </CustomText>
              </View>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: '#cef363',
                  }}></View>
                <CustomText
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                    color: '#181815',
                  }}>
                  Orders
                </CustomText>
              </View>
            </View>
          </View>

          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                  color: () => `#143b43`,
                  strokeWidth: 1, // optional
                },
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                  color: () => `#cef363`, // Blue color for orders
                  strokeWidth: 1, // optional
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            yAxisLabel="₹"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              color: (opacity = 1) => `#868686`,
              labelColor: (opacity = 1) => `#868686`,
              // Hide the Y-axis labels
              propsForVerticalLines: {
                opacity: 0, // hide only Y-axis labels
              },
            }}
            bezier
            style={{
              marginVertical: 10,
              // borderRadius: 16,
            }}
            withVerticalLines={false}
            withShadow={false}
            segments={4}
            fromZero={true}
          />
        </View>

        <View style={{marginTop: 20}}>
          <CustomText style={{fontFamily: 'Poppins-Medium', fontSize: 16}}>
            Top selling products
          </CustomText>
          <FlatList
            nestedScrollEnabled={true}
            style={{flexGrow: 0}}
            contentContainerStyle={{
              marginTop: 20,
              padding: 2,
            }}
            data={productList}
            keyExtractor={item => item.key}
            renderItem={({item, index}) => {
              return <ProductContainer key={index} />;
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <CustomText style={{fontFamily: 'Poppins-Medium', fontSize: 16}}>
            Running out of stock
          </CustomText>
          <FlatList
            nestedScrollEnabled={true}
            style={{flexGrow: 0}}
            contentContainerStyle={{
              marginTop: 20,
              padding: 2,
            }}
            data={productList}
            keyExtractor={item => item.key}
            renderItem={({item, index}) => {
              return <ProductContainer key={index} />;
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeIndex;

const styles = StyleSheet.create({});
