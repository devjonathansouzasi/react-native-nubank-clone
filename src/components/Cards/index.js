import React, {useRef, useState} from 'react';

import {PanGestureHandler, State} from 'react-native-gesture-handler';
import {Animated} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  CardsWrapper,
  CardWrapper,
  CardHeaderWrapper,
  CardHeaderText,
  CardContentWrapper,
  CardFooterWrapper,
  CardContentText,
  CardContentValue,
  CardContentBalanceWrapper,
  CardContentBalanceText,
  CardContentBalanceValue,
  CardFooterText,
} from './styles';

export default function Cards() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const listRef = useRef();

  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  function onScrollEnd(e) {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;
    let pageNum = Math.floor(contentOffset.x / viewSize.width);
    if (pageNum !== selectedIndex) {
      setSelectedIndex(pageNum);
    }
  }

  function handleStateChange(event) {}

  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={handleStateChange}>
      <Wrapper
        style={{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 400],
                outputRange: [-50, 0, 400],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <CardsWrapper
          ref={listRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onMomentumScrollEnd={onScrollEnd}>
          <CardWrapper>
            <CardHeaderWrapper>
              <Icon name="credit-card" size={30} color="#666" />
              <CardHeaderText>Cartão de crédito</CardHeaderText>
            </CardHeaderWrapper>
            <CardContentWrapper>
              <CardContentText>Fatura atual</CardContentText>
              <CardContentValue>R$ 10.000,00</CardContentValue>
              <CardContentBalanceWrapper>
                <CardContentBalanceText>
                  Limite disponível
                </CardContentBalanceText>
                <CardContentBalanceValue>
                  R$ 900.000.000,00
                </CardContentBalanceValue>
              </CardContentBalanceWrapper>
            </CardContentWrapper>
            <CardFooterWrapper>
              <Icon name="shopping-cart" size={30} color="#666" />
              <CardFooterText>
                Ultima compra realizada na Apple...
              </CardFooterText>
            </CardFooterWrapper>
          </CardWrapper>
          <CardWrapper />
          <CardWrapper />
        </CardsWrapper>
      </Wrapper>
    </PanGestureHandler>
  );
}
