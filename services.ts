import { AntonSDK } from '@anton-suite/anton-sdk';

const anthropicApiKey = ''

export const makeRequest = async () => {
    const anton = new AntonSDK({type: 'anthropic', apiKey: anthropicApiKey})
    return await anton.chat([{
        role: 'user',
        content: "hey tghere!"
    }])
}