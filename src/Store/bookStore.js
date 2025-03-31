import { create } from 'zustand';
import { persist } from 'zustand/middleware'

export const store = create(
  persist(
    (set, get) => ({
      count: {
        value: 1
      },
      language: {
        lang: "en",
      },
      user: {
        username: "N/A",
        firstName: "N/A",
        middleName: "N/A",
        lastName: "N/A",
        groupKey: "N/A",
        idiomGroupKey:"N/A",
        dateOfBirth: "N/A",
        profilePicURL: "N/A",
        defaultThemePalette: 0,
        isAdmin: "N/A",
        email: "N/A"
      },
      position: {
        building: "N/A",
        floor: "N/A",
        room: "N/A",
        roomId: "N/A",
        activeRoom: "false",
      },
      icon: {
        activeIcon: 'N/A'
      },
      selectedBuilding: {
        selectedBuilding: "principalBuilding"
      },
      selectedFloor: {
        selectedFloor: 0
      },
      editUserDrawer: {
        status: false
      },

      setEditUserDrawer: newStatus => {
        const current = get()
        set({ ...current, editUserDrawer: { status: newStatus }});
      },


      setSelectedFloor: newFloor => {
        const current = get()
        set({ ...current, selectedFloor: { selectedFloor : newFloor } });
      },

      setSelectedBuilding: newBuilding => {
        const current = get()
        set({ ...current, selectedBuilding: { selectedBuilding : newBuilding } });
      },


      setUserInformation: (
        newUsername,
        newFirstName,
        newMiddleName,
        newLastName,
        newGroupKey,
        newIdiomGroupKey,
        newDateOfBirth,
        newProfilePhotoURL,
        newDefaultThemePalette,
        newIsAdmin,
        newEmail,
      ) => {
        const current = get()
        set({...current, user:{
          username: newUsername,
          firstName: newFirstName,
          middleName: newMiddleName,
          lastName: newLastName,
          groupKey: newGroupKey,
          idiomGroupKey: newIdiomGroupKey,
          dateOfBirth: newDateOfBirth,
          profilePhotoURL: newProfilePhotoURL,
          defaultThemePalette: newDefaultThemePalette,
          isAdmin: newIsAdmin,
          email: newEmail,
        }});
      },


      setUserUsername: newUsername => {
        const current = get()
        set({ ...current, user: { ...current.user, username: newUsername } });
      },
      setUserFirstName: newFirstName => {
        const current = get()
        set({ ...current, user: { ...current.user, firstName: newFirstName } });
      },
      setUserMiddleName: newMiddleName => {
        const current = get()
        set({ ...current, user: { ...current.user, middleName: newMiddleName } });
      },
      setUserLastName: newLastName => {
        const current = get()
        set({ ...current, user: { ...current.user, lastName: newLastName } });
      },
      setUserEmail: newEmail => {
        const current = get()
        set({ ...current, user: { ...current.user, email: newEmail } });
      },
      setUserGroupKey: newGroupKey => {
        const current = get()
        set({ ...current, user: { ...current.user, groupKey: newGroupKey } });
      },
      setUserIdiomGroupKey: newIdiomGroupKey => {
        const current = get()
        set({ ...current, user: { ...current.user, idiomGroupKey: newIdiomGroupKey } });
      },

      setIcon: newActiveIcon => {
        const current = get()
        set({...current, icon: {activeIcon: newActiveIcon}})
      },

      setUser: isAdminAnswer => {
        const current = get()
        set({...current, user: {isAdmin: isAdminAnswer}})
      },
      setLanguage: newLanguage => {
        const current = get()
        set({...current, language: {lang: newLanguage}})
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