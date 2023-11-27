import React from "react";
import { StyleSheet, Text, View } from "react-native";

export type TimerModes = "Focus" | "Break";
type Props = {
    timerMode: TimerModes
}
export const TimerModeDisplay: React.FC<Props> = ({ timerMode }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.timerModelText}>
                {timerMode} Timer
            </Text>
            <Text style={styles.timerModelTextIntent}>
                {timerMode == 'Focus' ? 'Study now' : 'You can relax'} {' '}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%'
    },
    timerModelText: {
        fontSize: 40,
        fontWeight: '800',
        color: '#fff'
    },
    timerModelTextIntent: {
        fontSize: 20,
        fontWeight: '800',
        color: '#fff'
    }
})