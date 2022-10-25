import { wait } from '@testing-library/user-event/dist/utils';
import {React, useState} from 'react'

export default function EngInput() {

    const [input, setInput] = useState('');
    const [morse,setMorse] = useState('')

    function engToMorse(char) { 
        //returns equivalent morse code for english characters
        char = char.toUpperCase();
        const 
            A = '.-',
            B  = '-...',
            C  = '-.-.',
            D  = '-..',
            E  = '.',
            F  = '..-.',
            G  = '--.',
            H  = '....',
            I  = '..',
            J  = '.---',
            K  = '-.-',
            L  = '.-..',
            M  = '--',
            N  = '-.',
            O  = '---',
            P  = '.--.',
            Q = '--.-',
            R  = '.-.',
            S  = '...',
            T  = '-',
            U  = '..-',
            V  = '...-',
            W  = '.--',
            X  =  '-..-',
            Y  = '-.--',
            Z = '--..',
            ZERO = '-----',
            ONE  = '.----',
            TWO  = '..---',
            THREE = '...--',
            FOUR  = '....-',
            FIVE = '.....',
            SIX  = '-....',
            SEVEN  = '--...',
            EIGHT  = '---..',
            NINE = '----.';

            switch(char) {
                case 'A':
                    return A;
                break;
                case 'B':
                    return B;
                break;
                case 'C':
                    return C;
                break;
                case 'D':
                    return D;
                break;
                case 'E':
                    return E;
                break;
                case 'F':
                    return F;
                break;
                case 'G':
                    return G;
                break;
                case 'H':
                    return H;
                break;
                case 'I':
                    return I;
                break;
                case 'J':
                    return J;
                break;
                case 'K':
                    return K;
                break;
                case 'L':
                    return L;
                break;
                case 'M':
                    return M;
                break;
                case 'N':
                    return N;
                break;
                case 'O':
                    return O;
                break;
                case 'P':
                    return P;
                break;
                case 'Q':
                    return Q;
                break;
                case 'R':
                    return R;
                break;
                case 'S':
                    return S;
                break;
                case 'T':
                    return T;
                break;
                case 'U':
                    return U;
                break;
                case 'V':
                    return V;
                break;
                case 'W':
                    return W;
                break;
                case 'X':
                    return X;
                break;
                case 'Y':
                    return Y;
                break;
                case 'Z':
                    return Z;
                break;
                case '0':
                    return ZERO;
                break;
                case '1':
                    return ONE;
                break;
                case '2':
                    return TWO;
                break;
                case '3':
                    return THREE;
                break;
                case '4':
                    return FOUR;
                break;
                case '5':
                    return FIVE;
                break;
                case '6':
                    return SIX;
                break;
                case '7':
                    return SEVEN;
                break;
                case '8':
                    return EIGHT;
                break;
                case '9':
                    return NINE;
                break;
                case ' ':
                    return '/';
                default:
                    return '';                    
            }
    }

    function handleEnglishInput(event) {
        let rawInput = event.target.value, output='';
        let filterPunctuations = event.target.value.replace(/[^0-9 || ^a-z]/g,'')
        if(rawInput!=filterPunctuations)
            window.alert("Only alphanumeric input allowed")
        setInput(filterPunctuations)
        console.log(morse)
        for(let i in filterPunctuations) {
            // console.log(filterPunctuations[i])
            output = output + " " + engToMorse(filterPunctuations[i])
            
        }
        console.log(output)
        setMorse(output)
        
    }

    
    async function playAudio() {
        
        const delay = ms => new Promise(res => setTimeout(res, ms));
  
        let dit = new Audio("/dit.mp3"), dah = new Audio("/dah.mp3")
        
        for(let i in morse) {

            await delay(100)
            if(morse[i]=='.') {
                dit.play()
                
                
            } else if(morse[i]=='-') {

                dah.play()
                
            } 
        }
        
    }
    
  return (
    <div> 
        <h2>Generate Morse Code</h2>
        <label>Input: </label>
        <input type='text' name='EngInput' className='input' onChange={handleEnglishInput} value={input}/>
        <label>Output: </label>
        <textarea className='input' value={morse} disabled></textarea>
        <input className='play' value='play' type='button' onClick={playAudio}/>
    </div>
  )
}
