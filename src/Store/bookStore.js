import { create } from 'zustand';
import { persist } from 'zustand/middleware'

export const store = create(
  persist(
    (set, get) => ({
      count: {
        value: 1
      },
      position: {
        building: "N/A",
        floor: "N/A",
        room: "N/A",
        roomId: "N/A",
        activeRoom: "false"

      },

      setBothActiveRoomAndRoomId: (newActiveRoom, newRoomId) => {
        const current = get()
        set({...current, position: {activeRoom: newActiveRoom, roomId: newRoomId}})
      },

      setActiveRoom: newActiveRoom => {
        const current = get()
        set({...current, position: { activeRoom: newActiveRoom }})
      },
      setRoomId: newRoomId => {
        const current = get()
        set({...current, position: { roomId: newRoomId }})
      },
      setRoom: newRoom => {
        const current = get()
        set({...current, position: { room: newRoom }})
      },
      setFloor: newFloor => {
        const current = get()
        set({...current, position: { floor: newFloor }})
      },
      setBuilding: newBuilding => {
        const current = get()
        set({...current, position: { building: newBuilding }})
      },



      increment: v => {
        const current = get()
        set({...current, count: { value: v}})
      },
      decrement: v => {
        const current = get()
        set({...current, count: { value: v}})
      }
    })
  ))