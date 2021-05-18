// MOCK STORE
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
const mockData = {
    get: () => JSON.parse(window.localStorage.getItem('todos') || '[]'),
    create: (data: any) => {
        const d = mockData.get()
        d.push(data)
        window.localStorage.setItem('todos', JSON.stringify(d))
        return d
    }
}

// actions
export const getAllTodoClient = async () => {
    await sleep(1000)
    return mockData.get()
}

export const createTodoClient = async (data: any) => {
    await sleep(1000)
    return mockData.create(data)
}