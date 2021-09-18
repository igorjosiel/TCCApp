import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Styled from './components';

export default function ModalInformation(props) {
    const { openModal, closeModal, message } = props;

    return (
      <View style={{marginBottom: 'auto', marginTop: 'auto'}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={openModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{height: 300, backgroundColor: 'white', width: "80%", marginTop: 'auto', marginBottom: 'auto',marginLeft: 'auto', marginRight: 'auto', borderRadius: 10}}>
            <View>
              <View style={{height: '115%', alignItems: 'center'}}>
                <Icon name="exclamation" size={75} style={{marginBottom: 'auto', marginTop: 'auto'}} color="#000" />
              </View>
              <View style={{height: '65%', alignItems: 'center'}}>
              <Text style={{textAlign: 'center', height: '100%', width: "90%", marginLeft: 'auto', marginRight: 'auto', fontWeight: 'bold'}}>{message}</Text>
              </View>
              <View style={{height: '45%', alignItems: 'center', width: '100%'}}>
                <TouchableHighlight
                  style={{width: "50%", backgroundColor: '#00BFFF', height: '50%', marginRight: 'auto', marginLeft: 'auto', borderRadius: 5}}
                  onPress={() => {
                    closeModal()
                  }}>
                  <Styled.TextButton>
                    Voltar
                  </Styled.TextButton>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }