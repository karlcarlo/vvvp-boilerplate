import { defineStore } from "pinia"

export const useStore = defineStore(
    'comm',
    {
        state: () => ({
            count: 0
        }),

        actions: {
            inc(num) {
                if (num) {
                    this.count += num
                }
                else {
                    this.count ++
                }
            }
        }
    }
)

