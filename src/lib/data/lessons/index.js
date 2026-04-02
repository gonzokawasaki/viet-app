/**
 * Lesson data — bilingual Vietnamese/English sentence pairs.
 *
 * Each lesson has:
 *   id, title (en/vi), level, topic, sentences[]
 *
 * Sentences have:
 *   en, vi, note (grammar/vocab hint), tags[] (for tailoring to user profile)
 *
 * Tags allow filtering/prioritising sentences relevant to user interests/job/etc.
 */

export const lessons = [
  // ──────────────────────────────────────────────
  // EXISTING LESSONS (expanded to 20 sentences)
  // ──────────────────────────────────────────────
  {
    id: 'greetings-01',
    title: { en: 'Greetings & Introductions', vi: 'Chào hỏi & Giới thiệu' },
    level: 'beginner',
    topic: 'greetings',
    sentences: [
      { en: 'Hello, my name is [name].', vi: 'Xin chào, tên tôi là [name].', note: 'Basic introduction. Replace [name] with your name.', tags: [] },
      { en: 'Nice to meet you.', vi: 'Rất vui được gặp bạn.', note: '"Rất vui" = very happy. "được gặp" = to meet.', tags: [] },
      { en: 'How are you today?', vi: 'Hôm nay bạn có khỏe không?', note: '"Hôm nay" = today. "khỏe" = healthy/well.', tags: [] },
      { en: 'I am fine, thank you.', vi: 'Tôi khỏe, cảm ơn bạn.', note: '"Cảm ơn" = thank you.', tags: [] },
      { en: 'Where are you from?', vi: 'Bạn đến từ đâu?', note: '"đến từ" = come from. "đâu" = where.', tags: [] },
      { en: 'I am from [city].', vi: 'Tôi đến từ [city].', note: 'Replace [city] with your city.', tags: ['city'] },
      { en: 'What do you do for a living?', vi: 'Bạn làm nghề gì?', note: '"làm nghề" = work as. "gì" = what.', tags: ['job'] },
      { en: 'I work as a [job].', vi: 'Tôi làm [job].', note: 'Replace [job] with your occupation.', tags: ['job'] },
      { en: 'See you later!', vi: 'Hẹn gặp lại!', note: '"Hẹn" = promise/plan. "gặp lại" = meet again.', tags: [] },
      { en: 'Goodbye!', vi: 'Tạm biệt!', note: 'Formal goodbye.', tags: [] },
      { en: 'Good morning!', vi: 'Chào buổi sáng!', note: '"buổi sáng" = morning. Used before noon.', tags: [] },
      { en: 'Good evening!', vi: 'Chào buổi tối!', note: '"buổi tối" = evening.', tags: [] },
      { en: 'How old are you?', vi: 'Bạn bao nhiêu tuổi?', note: '"bao nhiêu tuổi" = how many years old. Common in Vietnam, not considered rude.', tags: [] },
      { en: 'I am [age] years old.', vi: 'Tôi [age] tuổi.', note: 'Vietnamese often ask age early to choose correct pronouns.', tags: ['age'] },
      { en: 'What is your phone number?', vi: 'Số điện thoại của bạn là gì?', note: '"số điện thoại" = phone number. "của bạn" = your.', tags: [] },
      { en: 'Please call me [name].', vi: 'Hãy gọi tôi là [name].', note: '"Hãy" = please (imperative). "gọi" = call.', tags: [] },
      { en: 'It is nice to see you again.', vi: 'Rất vui được gặp lại bạn.', note: '"gặp lại" = see again. Used for people you have met before.', tags: [] },
      { en: 'How is your family?', vi: 'Gia đình bạn có khỏe không?', note: '"gia đình" = family. A warm greeting in Vietnamese culture.', tags: [] },
      { en: 'I live in [city].', vi: 'Tôi sống ở [city].', note: '"sống ở" = live in.', tags: ['city'] },
      { en: 'Have you eaten yet?', vi: 'Bạn ăn cơm chưa?', note: 'Literally "have you eaten rice yet?" — a common Vietnamese greeting, like "how are you?".', tags: [] },
    ],
  },
  {
    id: 'daily-routine-01',
    title: { en: 'Daily Routine', vi: 'Thói quen hàng ngày' },
    level: 'beginner',
    topic: 'daily-life',
    sentences: [
      { en: 'I wake up at 7 in the morning.', vi: 'Tôi thức dậy lúc 7 giờ sáng.', note: '"thức dậy" = wake up. "lúc" = at (time).', tags: [] },
      { en: 'I eat breakfast before going to work.', vi: 'Tôi ăn sáng trước khi đi làm.', note: '"trước khi" = before. "đi làm" = go to work.', tags: ['job'] },
      { en: 'I take the bus to [city] every day.', vi: 'Tôi đi xe buýt đến [city] mỗi ngày.', note: '"xe buýt" = bus. "mỗi ngày" = every day.', tags: ['city'] },
      { en: 'I have lunch at noon.', vi: 'Tôi ăn trưa lúc 12 giờ.', note: '"ăn trưa" = eat lunch.', tags: [] },
      { en: 'After work, I go home and rest.', vi: 'Sau khi tan làm, tôi về nhà và nghỉ ngơi.', note: '"tan làm" = finish work. "nghỉ ngơi" = rest.', tags: ['job'] },
      { en: 'In the evening, I like to [interest].', vi: 'Buổi tối, tôi thích [interest].', note: '"buổi tối" = evening. "thích" = like.', tags: ['interests'] },
      { en: 'I go to bed at 11 pm.', vi: 'Tôi đi ngủ lúc 11 giờ tối.', note: '"đi ngủ" = go to sleep.', tags: [] },
      { en: 'On weekends, I spend time with my family.', vi: 'Cuối tuần, tôi dành thời gian cho gia đình.', note: '"cuối tuần" = weekend. "gia đình" = family.', tags: ['maritalStatus'] },
      { en: 'I brush my teeth twice a day.', vi: 'Tôi đánh răng hai lần một ngày.', note: '"đánh răng" = brush teeth. "hai lần" = twice.', tags: [] },
      { en: 'I take a shower every morning.', vi: 'Tôi tắm mỗi sáng.', note: '"tắm" = bathe/shower. Short and natural.', tags: [] },
      { en: 'I usually cook dinner at home.', vi: 'Tôi thường nấu cơm tối ở nhà.', note: '"nấu cơm" = cook rice (means cook dinner). "thường" = usually.', tags: [] },
      { en: 'I drive my motorbike to work.', vi: 'Tôi lái xe máy đi làm.', note: '"xe máy" = motorbike. The most common transport in Vietnam.', tags: ['job'] },
      { en: 'I check my phone first thing in the morning.', vi: 'Tôi kiểm tra điện thoại đầu tiên vào buổi sáng.', note: '"kiểm tra" = check. "đầu tiên" = first thing.', tags: [] },
      { en: 'I drink coffee every morning.', vi: 'Tôi uống cà phê mỗi sáng.', note: '"uống cà phê" = drink coffee. Vietnamese coffee culture is huge.', tags: [] },
      { en: 'After school, I do my homework.', vi: 'Sau giờ học, tôi làm bài tập.', note: '"sau giờ học" = after school hours. "bài tập" = homework.', tags: ['school'] },
      { en: 'I study at [school] from Monday to Friday.', vi: 'Tôi học ở [school] từ thứ Hai đến thứ Sáu.', note: '"từ...đến" = from...to. Days of the week in Vietnamese use numbers.', tags: ['school'] },
      { en: 'I exercise for 30 minutes after work.', vi: 'Tôi tập thể dục 30 phút sau giờ làm.', note: '"tập thể dục" = exercise. "phút" = minutes.', tags: [] },
      { en: 'I watch TV with my family in the evening.', vi: 'Tôi xem tivi với gia đình buổi tối.', note: '"xem tivi" = watch TV. "với" = with.', tags: [] },
      { en: 'I read before going to sleep.', vi: 'Tôi đọc sách trước khi đi ngủ.', note: '"đọc sách" = read books. "trước khi" = before.', tags: [] },
      { en: 'My alarm goes off at 6:30 am.', vi: 'Chuông báo thức của tôi kêu lúc 6 giờ 30 sáng.', note: '"chuông báo thức" = alarm clock. "kêu" = ring/go off.', tags: [] },
    ],
  },
  {
    id: 'food-drink-01',
    title: { en: 'Food & Drink', vi: 'Đồ ăn & Thức uống' },
    level: 'beginner',
    topic: 'food',
    sentences: [
      { en: 'I would like a bowl of pho, please.', vi: 'Cho tôi một tô phở.', note: '"Cho tôi" = give me (polite). "tô" = bowl (Southern). Northern: "bát".', tags: [] },
      { en: 'How much does this cost?', vi: 'Cái này giá bao nhiêu?', note: '"giá" = price. "bao nhiêu" = how much.', tags: [] },
      { en: 'This is delicious!', vi: 'Ngon quá!', note: '"Ngon" = delicious. "quá" = so/very (exclamation).', tags: [] },
      { en: 'I am vegetarian.', vi: 'Tôi ăn chay.', note: '"ăn chay" = eat vegetarian.', tags: [] },
      { en: 'Can I have the menu?', vi: 'Cho tôi xem thực đơn được không?', note: '"thực đơn" = menu. "được không" = is it ok?', tags: [] },
      { en: 'I would like an iced coffee.', vi: 'Cho tôi một ly cà phê đá.', note: '"cà phê đá" = iced coffee. Very common in Vietnam!', tags: [] },
      { en: 'Do you have any [interest]-flavoured dishes?', vi: 'Bạn có món nào vị [interest] không?', note: 'Flexible sentence for food preferences.', tags: ['interests'] },
      { en: 'The bill, please.', vi: 'Tính tiền giùm.', note: '"Tính tiền" = calculate money. Southern style. Northern: "Tính tiền ạ".', tags: [] },
      { en: 'I am allergic to peanuts.', vi: 'Tôi bị dị ứng với đậu phộng.', note: '"bị dị ứng" = be allergic. "đậu phộng" = peanuts.', tags: [] },
      { en: 'Can I have some more rice?', vi: 'Cho tôi thêm cơm được không?', note: '"thêm" = more. "cơm" = cooked rice.', tags: [] },
      { en: 'This is too spicy for me.', vi: 'Món này cay quá đối với tôi.', note: '"cay" = spicy. "quá" = too much.', tags: [] },
      { en: 'I want to try banh mi.', vi: 'Tôi muốn thử bánh mì.', note: '"thử" = try. Bánh mì is Vietnam\'s famous baguette sandwich.', tags: [] },
      { en: 'What do you recommend?', vi: 'Bạn gợi ý món gì?', note: '"gợi ý" = recommend/suggest. "món" = dish.', tags: [] },
      { en: 'I do not eat seafood.', vi: 'Tôi không ăn hải sản.', note: '"hải sản" = seafood. "không" = not/don\'t.', tags: [] },
      { en: 'This soup is very tasty.', vi: 'Canh này rất ngon.', note: '"canh" = soup. "rất" = very.', tags: [] },
      { en: 'Can we sit outside?', vi: 'Chúng tôi ngồi ngoài được không?', note: '"ngồi ngoài" = sit outside. Street dining is common in Vietnam.', tags: [] },
      { en: 'I would like a glass of water.', vi: 'Cho tôi một ly nước.', note: '"ly" = glass. "nước" = water.', tags: [] },
      { en: 'Do you have a table for two?', vi: 'Có bàn cho hai người không?', note: '"bàn" = table. "hai người" = two people.', tags: [] },
      { en: 'I love Vietnamese food.', vi: 'Tôi rất thích đồ ăn Việt Nam.', note: '"đồ ăn" = food. "Việt Nam" = Vietnam.', tags: [] },
      { en: 'Let us share this dish.', vi: 'Mình chia sẻ món này nhé.', note: '"chia sẻ" = share. "nhé" = soft suggestion. Family-style eating is the norm.', tags: [] },
    ],
  },
  {
    id: 'travel-directions-01',
    title: { en: 'Travel & Directions', vi: 'Du lịch & Chỉ đường' },
    level: 'elementary',
    topic: 'travel',
    sentences: [
      { en: 'Excuse me, where is the nearest station?', vi: 'Xin lỗi, trạm gần nhất ở đâu?', note: '"xin lỗi" = excuse me. "gần nhất" = nearest.', tags: [] },
      { en: 'I want to go to [city].', vi: 'Tôi muốn đi đến [city].', note: '"muốn" = want. "đi đến" = go to.', tags: ['city'] },
      { en: 'How long does it take?', vi: 'Mất bao lâu?', note: '"mất" = take (time). "bao lâu" = how long.', tags: [] },
      { en: 'Turn left at the traffic light.', vi: 'Rẽ trái ở đèn giao thông.', note: '"rẽ trái" = turn left. "đèn giao thông" = traffic light.', tags: [] },
      { en: 'Go straight for 200 metres.', vi: 'Đi thẳng khoảng 200 mét.', note: '"đi thẳng" = go straight. "khoảng" = about.', tags: [] },
      { en: 'I am lost. Can you help me?', vi: 'Tôi bị lạc. Bạn có thể giúp tôi không?', note: '"bị lạc" = be lost. "giúp" = help.', tags: [] },
      { en: 'How much is a taxi to the airport?', vi: 'Đi taxi ra sân bay bao nhiêu tiền?', note: '"sân bay" = airport. "bao nhiêu tiền" = how much money.', tags: [] },
      { en: 'I am travelling for [goal].', vi: 'Tôi đi du lịch để [goal].', note: '"du lịch" = travel. "để" = in order to.', tags: ['goal'] },
      { en: 'Where can I buy a bus ticket?', vi: 'Tôi có thể mua vé xe buýt ở đâu?', note: '"mua" = buy. "vé" = ticket.', tags: [] },
      { en: 'Is this the right way to the market?', vi: 'Đây có phải đường đến chợ không?', note: '"chợ" = market. "đường" = road/way.', tags: [] },
      { en: 'I need a map of the city.', vi: 'Tôi cần một bản đồ thành phố.', note: '"bản đồ" = map. "thành phố" = city.', tags: [] },
      { en: 'How far is it from here?', vi: 'Từ đây đến đó bao xa?', note: '"bao xa" = how far. "từ đây" = from here.', tags: [] },
      { en: 'Can you show me on the map?', vi: 'Bạn có thể chỉ trên bản đồ được không?', note: '"chỉ" = show/point. "trên" = on.', tags: [] },
      { en: 'I would like to book a hotel room.', vi: 'Tôi muốn đặt phòng khách sạn.', note: '"đặt phòng" = book a room. "khách sạn" = hotel.', tags: [] },
      { en: 'What time does the train leave?', vi: 'Mấy giờ tàu khởi hành?', note: '"tàu" = train. "khởi hành" = depart.', tags: [] },
      { en: 'Turn right after the bridge.', vi: 'Rẽ phải sau cầu.', note: '"rẽ phải" = turn right. "cầu" = bridge.', tags: [] },
      { en: 'Is there a pharmacy nearby?', vi: 'Gần đây có nhà thuốc không?', note: '"nhà thuốc" = pharmacy. "gần đây" = nearby.', tags: [] },
      { en: 'I want to rent a motorbike.', vi: 'Tôi muốn thuê xe máy.', note: '"thuê" = rent. "xe máy" = motorbike. Common for tourists in Vietnam.', tags: [] },
      { en: 'Can you take me to this address?', vi: 'Bạn có thể đưa tôi đến địa chỉ này không?', note: '"đưa" = take (someone). "địa chỉ" = address.', tags: [] },
      { en: 'The beach is about 10 kilometres away.', vi: 'Bãi biển cách đây khoảng 10 cây số.', note: '"bãi biển" = beach. "cây số" = kilometre (colloquial).', tags: [] },
    ],
  },
  {
    id: 'work-business-01',
    title: { en: 'Work & Business', vi: 'Công việc & Kinh doanh' },
    level: 'intermediate',
    topic: 'work',
    sentences: [
      { en: 'I have a meeting at 3 o\'clock.', vi: 'Tôi có cuộc họp lúc 3 giờ.', note: '"cuộc họp" = meeting.', tags: ['job'] },
      { en: 'Could you send me the report?', vi: 'Bạn có thể gửi báo cáo cho tôi không?', note: '"gửi" = send. "báo cáo" = report.', tags: ['job'] },
      { en: 'I work in [job] in [city].', vi: 'Tôi làm việc trong ngành [job] ở [city].', note: '"ngành" = field/industry.', tags: ['job', 'city'] },
      { en: 'What is the deadline for this project?', vi: 'Dự án này hạn chót là khi nào?', note: '"hạn chót" = deadline. "khi nào" = when.', tags: ['job'] },
      { en: 'I need to improve my English for work.', vi: 'Tôi cần cải thiện tiếng Anh cho công việc.', note: '"cải thiện" = improve. Common goal for Vietnamese professionals.', tags: ['goal'] },
      { en: 'Let me introduce my colleague.', vi: 'Để tôi giới thiệu đồng nghiệp của tôi.', note: '"đồng nghiệp" = colleague.', tags: ['job'] },
      { en: 'The Wi-Fi password is on the board.', vi: 'Mật khẩu Wi-Fi ở trên bảng.', note: '"mật khẩu" = password. "bảng" = board.', tags: [] },
      { en: 'Shall we take a coffee break?', vi: 'Mình nghỉ uống cà phê nhé?', note: '"nghỉ" = break/rest. "nhé" = soft suggestion particle.', tags: [] },
      { en: 'I will finish this task by Friday.', vi: 'Tôi sẽ hoàn thành công việc này trước thứ Sáu.', note: '"hoàn thành" = complete/finish. "trước" = before/by.', tags: ['job'] },
      { en: 'Can we reschedule the meeting?', vi: 'Chúng ta có thể dời lịch họp không?', note: '"dời lịch" = reschedule. "họp" = meet (formal).', tags: ['job'] },
      { en: 'I am on a business trip to [city].', vi: 'Tôi đang đi công tác ở [city].', note: '"đi công tác" = go on a business trip.', tags: ['city'] },
      { en: 'Could you explain that again?', vi: 'Bạn có thể giải thích lại được không?', note: '"giải thích" = explain. "lại" = again.', tags: [] },
      { en: 'I will send you an email this afternoon.', vi: 'Tôi sẽ gửi email cho bạn chiều nay.', note: '"chiều nay" = this afternoon.', tags: [] },
      { en: 'What is your company called?', vi: 'Công ty của bạn tên gì?', note: '"công ty" = company.', tags: [] },
      { en: 'I have been working here for three years.', vi: 'Tôi đã làm việc ở đây ba năm rồi.', note: '"đã...rồi" = have been...already. "ba năm" = three years.', tags: ['job'] },
      { en: 'We need to prepare a presentation.', vi: 'Chúng ta cần chuẩn bị bài thuyết trình.', note: '"chuẩn bị" = prepare. "bài thuyết trình" = presentation.', tags: ['job'] },
      { en: 'The salary is negotiable.', vi: 'Lương có thể thương lượng.', note: '"lương" = salary. "thương lượng" = negotiate.', tags: [] },
      { en: 'I am looking for a new job.', vi: 'Tôi đang tìm việc mới.', note: '"tìm việc" = look for work. "mới" = new.', tags: [] },
      { en: 'Please sign here.', vi: 'Vui lòng ký tên ở đây.', note: '"vui lòng" = please (formal). "ký tên" = sign your name.', tags: [] },
      { en: 'My office is on the third floor.', vi: 'Văn phòng tôi ở tầng ba.', note: '"văn phòng" = office. "tầng" = floor/level.', tags: ['job'] },
    ],
  },
  {
    id: 'family-relationships-01',
    title: { en: 'Family & Relationships', vi: 'Gia đình & Mối quan hệ' },
    level: 'elementary',
    topic: 'family',
    sentences: [
      { en: 'I have [number] brothers and sisters.', vi: 'Tôi có [number] anh chị em.', note: '"anh chị em" = siblings. Vietnamese distinguishes older/younger.', tags: ['children'] },
      { en: 'My parents live in [city].', vi: 'Bố mẹ tôi sống ở [city].', note: '"bố mẹ" = parents (Northern). Southern: "ba má".', tags: ['city'] },
      { en: 'How old are your children?', vi: 'Con bạn bao nhiêu tuổi?', note: '"bao nhiêu tuổi" = how many years old.', tags: ['children'] },
      { en: 'My wife/husband works as a teacher.', vi: 'Vợ/chồng tôi làm giáo viên.', note: '"vợ" = wife. "chồng" = husband. "giáo viên" = teacher.', tags: ['maritalStatus'] },
      { en: 'We have been married for [yearsMarried] years.', vi: 'Chúng tôi kết hôn được [yearsMarried] năm rồi.', note: '"kết hôn" = get married. "được...rồi" = for...already.', tags: ['maritalStatus'] },
      { en: 'I like spending time with my family.', vi: 'Tôi thích dành thời gian cho gia đình.', note: '"dành thời gian" = spend time.', tags: [] },
      { en: 'My grandmother makes the best pho.', vi: 'Bà tôi nấu phở ngon nhất.', note: '"bà" = grandmother. "ngon nhất" = most delicious.', tags: [] },
      { en: 'Are you married?', vi: 'Bạn đã kết hôn chưa?', note: '"đã...chưa" = have you...yet. Common personal question in Vietnam.', tags: [] },
      { en: 'My older brother is a doctor.', vi: 'Anh trai tôi là bác sĩ.', note: '"anh trai" = older brother. "bác sĩ" = doctor.', tags: [] },
      { en: 'My younger sister is still in school.', vi: 'Em gái tôi vẫn còn đi học.', note: '"em gái" = younger sister. "vẫn còn" = still.', tags: ['school'] },
      { en: 'My children are [childrenAges] years old.', vi: 'Con tôi [childrenAges] tuổi.', note: 'Personalised with your children\'s ages.', tags: ['children'] },
      { en: 'We celebrate Tet with the whole family.', vi: 'Chúng tôi đón Tết với cả gia đình.', note: '"đón Tết" = celebrate Tet (Lunar New Year). Biggest family holiday.', tags: [] },
      { en: 'My uncle lives abroad.', vi: 'Chú tôi sống ở nước ngoài.', note: '"chú" = uncle (father\'s younger brother). "nước ngoài" = abroad.', tags: [] },
      { en: 'I am the oldest child in my family.', vi: 'Tôi là con cả trong gia đình.', note: '"con cả" = eldest child. Important status in Vietnamese family.', tags: [] },
      { en: 'My family has dinner together every evening.', vi: 'Gia đình tôi ăn tối cùng nhau mỗi tối.', note: '"ăn tối" = eat dinner. "cùng nhau" = together.', tags: [] },
      { en: 'My mother is a great cook.', vi: 'Mẹ tôi nấu ăn rất giỏi.', note: '"nấu ăn" = cook. "giỏi" = skilled/great.', tags: [] },
      { en: 'Do you have any brothers or sisters?', vi: 'Bạn có anh chị em không?', note: '"anh chị em" covers all siblings regardless of age/gender.', tags: [] },
      { en: 'My father taught me how to ride a bike.', vi: 'Bố tôi dạy tôi đi xe đạp.', note: '"dạy" = teach. "xe đạp" = bicycle.', tags: [] },
      { en: 'We visit our grandparents every Sunday.', vi: 'Chúng tôi thăm ông bà mỗi Chủ nhật.', note: '"thăm" = visit. "ông bà" = grandparents.', tags: [] },
      { en: 'Family is the most important thing to me.', vi: 'Gia đình là điều quan trọng nhất với tôi.', note: '"quan trọng nhất" = most important. A common Vietnamese value.', tags: [] },
    ],
  },

  // ──────────────────────────────────────────────
  // IELTS SPEAKING TOPIC LESSONS (20 sentences each)
  // General subjects — minimal personalisation
  // ──────────────────────────────────────────────
  {
    id: 'ielts-education-01',
    title: { en: 'IELTS: Education', vi: 'IELTS: Giáo dục' },
    level: 'intermediate',
    topic: 'ielts',
    sentences: [
      { en: 'Education is the key to a better future.', vi: 'Giáo dục là chìa khóa cho một tương lai tốt đẹp hơn.', note: '"chìa khóa" = key. Common IELTS opening statement.', tags: [] },
      { en: 'Children should learn both academic and practical skills.', vi: 'Trẻ em nên học cả kỹ năng học thuật và thực hành.', note: '"học thuật" = academic. "thực hành" = practical.', tags: [] },
      { en: 'Many students struggle with exam pressure.', vi: 'Nhiều học sinh gặp khó khăn với áp lực thi cử.', note: '"áp lực thi cử" = exam pressure. A big issue in Vietnam.', tags: [] },
      { en: 'Online learning has become more popular recently.', vi: 'Học trực tuyến đã trở nên phổ biến hơn gần đây.', note: '"học trực tuyến" = online learning. "phổ biến" = popular.', tags: [] },
      { en: 'Teachers play an important role in shaping young minds.', vi: 'Giáo viên đóng vai trò quan trọng trong việc hình thành tư duy trẻ.', note: '"đóng vai trò" = play a role. "tư duy" = mindset/thinking.', tags: [] },
      { en: 'University education is not the only path to success.', vi: 'Giáo dục đại học không phải là con đường duy nhất dẫn đến thành công.', note: '"con đường duy nhất" = the only path. Good for IELTS Part 3.', tags: [] },
      { en: 'I believe homework helps students revise what they learned.', vi: 'Tôi tin rằng bài tập về nhà giúp học sinh ôn lại bài.', note: '"ôn lại" = revise/review.', tags: [] },
      { en: 'Some people prefer learning from experience rather than books.', vi: 'Một số người thích học từ kinh nghiệm hơn là sách vở.', note: '"kinh nghiệm" = experience. "hơn là" = rather than.', tags: [] },
      { en: 'The cost of education has increased significantly.', vi: 'Chi phí giáo dục đã tăng đáng kể.', note: '"chi phí" = cost. "tăng đáng kể" = increased significantly.', tags: [] },
      { en: 'Critical thinking should be taught from a young age.', vi: 'Tư duy phản biện nên được dạy từ nhỏ.', note: '"tư duy phản biện" = critical thinking.', tags: [] },
      { en: 'Group work helps students improve their teamwork skills.', vi: 'Làm việc nhóm giúp học sinh cải thiện kỹ năng làm việc đội nhóm.', note: '"làm việc nhóm" = group work.', tags: [] },
      { en: 'Not everyone learns at the same pace.', vi: 'Không phải ai cũng học cùng tốc độ.', note: '"tốc độ" = speed/pace. "không phải ai cũng" = not everyone.', tags: [] },
      { en: 'Technology has transformed the way we learn.', vi: 'Công nghệ đã thay đổi cách chúng ta học.', note: '"thay đổi" = transform/change.', tags: [] },
      { en: 'Studying abroad can broaden your perspective.', vi: 'Du học có thể mở rộng tầm nhìn của bạn.', note: '"du học" = study abroad. "tầm nhìn" = perspective.', tags: [] },
      { en: 'Creativity is just as important as academic knowledge.', vi: 'Sáng tạo cũng quan trọng như kiến thức học thuật.', note: '"sáng tạo" = creativity. "cũng...như" = just as...as.', tags: [] },
      { en: 'Schools should focus more on life skills.', vi: 'Trường học nên tập trung nhiều hơn vào kỹ năng sống.', note: '"kỹ năng sống" = life skills.', tags: [] },
      { en: 'Reading widely can improve your vocabulary.', vi: 'Đọc nhiều có thể cải thiện vốn từ vựng.', note: '"vốn từ vựng" = vocabulary.', tags: [] },
      { en: 'Some students perform better with hands-on learning.', vi: 'Một số học sinh học tốt hơn khi thực hành.', note: '"thực hành" = hands-on/practical.', tags: [] },
      { en: 'A good teacher inspires students to learn independently.', vi: 'Một giáo viên giỏi truyền cảm hứng để học sinh tự học.', note: '"truyền cảm hứng" = inspire. "tự học" = self-study.', tags: [] },
      { en: 'Education systems vary greatly from country to country.', vi: 'Hệ thống giáo dục khác nhau rất nhiều giữa các quốc gia.', note: '"hệ thống" = system. "khác nhau" = differ.', tags: [] },
    ],
  },
  {
    id: 'ielts-technology-01',
    title: { en: 'IELTS: Technology', vi: 'IELTS: Công nghệ' },
    level: 'intermediate',
    topic: 'ielts',
    sentences: [
      { en: 'Technology has changed the way we communicate.', vi: 'Công nghệ đã thay đổi cách chúng ta giao tiếp.', note: '"giao tiếp" = communicate.', tags: [] },
      { en: 'Social media can be both useful and harmful.', vi: 'Mạng xã hội có thể vừa hữu ích vừa có hại.', note: '"vừa...vừa" = both...and. Good balanced IELTS structure.', tags: [] },
      { en: 'Many jobs will be replaced by artificial intelligence.', vi: 'Nhiều công việc sẽ bị thay thế bởi trí tuệ nhân tạo.', note: '"trí tuệ nhân tạo" = artificial intelligence.', tags: [] },
      { en: 'Smartphones have become an essential part of daily life.', vi: 'Điện thoại thông minh đã trở thành phần thiết yếu của cuộc sống.', note: '"thiết yếu" = essential.', tags: [] },
      { en: 'Children spend too much time on screens.', vi: 'Trẻ em dành quá nhiều thời gian trước màn hình.', note: '"màn hình" = screen. "quá nhiều" = too much.', tags: [] },
      { en: 'The internet gives people access to unlimited information.', vi: 'Internet cho phép mọi người tiếp cận thông tin không giới hạn.', note: '"tiếp cận" = access. "không giới hạn" = unlimited.', tags: [] },
      { en: 'Privacy is a growing concern in the digital age.', vi: 'Quyền riêng tư là mối lo ngại ngày càng lớn trong thời đại số.', note: '"quyền riêng tư" = privacy. "thời đại số" = digital age.', tags: [] },
      { en: 'E-commerce has transformed the shopping experience.', vi: 'Thương mại điện tử đã thay đổi trải nghiệm mua sắm.', note: '"thương mại điện tử" = e-commerce.', tags: [] },
      { en: 'Self-driving cars could reduce traffic accidents.', vi: 'Xe tự lái có thể giảm tai nạn giao thông.', note: '"xe tự lái" = self-driving car. "tai nạn" = accident.', tags: [] },
      { en: 'People are becoming too dependent on technology.', vi: 'Con người đang trở nên quá phụ thuộc vào công nghệ.', note: '"phụ thuộc" = dependent.', tags: [] },
      { en: 'Video calls make it easy to stay in touch.', vi: 'Cuộc gọi video giúp dễ dàng giữ liên lạc.', note: '"giữ liên lạc" = stay in touch.', tags: [] },
      { en: 'Robots are being used in factories and hospitals.', vi: 'Robot đang được sử dụng trong nhà máy và bệnh viện.', note: '"nhà máy" = factory. "bệnh viện" = hospital.', tags: [] },
      { en: 'Cyberbullying is a serious problem among young people.', vi: 'Bắt nạt trên mạng là vấn đề nghiêm trọng ở giới trẻ.', note: '"bắt nạt trên mạng" = cyberbullying.', tags: [] },
      { en: 'Technology should be used to solve environmental problems.', vi: 'Công nghệ nên được dùng để giải quyết vấn đề môi trường.', note: '"giải quyết" = solve. "môi trường" = environment.', tags: [] },
      { en: 'Streaming services have replaced traditional television.', vi: 'Dịch vụ phát trực tuyến đã thay thế truyền hình truyền thống.', note: '"phát trực tuyến" = streaming. "truyền thống" = traditional.', tags: [] },
      { en: 'Not everyone has equal access to technology.', vi: 'Không phải ai cũng có quyền tiếp cận công nghệ bình đẳng.', note: '"bình đẳng" = equal. The digital divide.', tags: [] },
      { en: 'Wearable devices can monitor our health.', vi: 'Thiết bị đeo tay có thể theo dõi sức khỏe.', note: '"thiết bị đeo tay" = wearable device. "theo dõi" = monitor.', tags: [] },
      { en: 'Online banking saves a lot of time.', vi: 'Ngân hàng trực tuyến tiết kiệm rất nhiều thời gian.', note: '"tiết kiệm" = save (time/money).', tags: [] },
      { en: 'We should teach digital literacy in schools.', vi: 'Chúng ta nên dạy kỹ năng số trong trường học.', note: '"kỹ năng số" = digital literacy.', tags: [] },
      { en: 'Technology is advancing faster than ever before.', vi: 'Công nghệ đang phát triển nhanh hơn bao giờ hết.', note: '"phát triển" = develop/advance. "nhanh hơn bao giờ hết" = faster than ever.', tags: [] },
    ],
  },
  {
    id: 'ielts-environment-01',
    title: { en: 'IELTS: Environment', vi: 'IELTS: Môi trường' },
    level: 'intermediate',
    topic: 'ielts',
    sentences: [
      { en: 'Climate change is the biggest threat to our planet.', vi: 'Biến đổi khí hậu là mối đe dọa lớn nhất đối với hành tinh.', note: '"biến đổi khí hậu" = climate change. "mối đe dọa" = threat.', tags: [] },
      { en: 'We should reduce, reuse and recycle.', vi: 'Chúng ta nên giảm thiểu, tái sử dụng và tái chế.', note: '"giảm thiểu" = reduce. "tái chế" = recycle.', tags: [] },
      { en: 'Pollution is a serious problem in many cities.', vi: 'Ô nhiễm là vấn đề nghiêm trọng ở nhiều thành phố.', note: '"ô nhiễm" = pollution. "nghiêm trọng" = serious.', tags: [] },
      { en: 'Deforestation destroys natural habitats.', vi: 'Phá rừng hủy hoại môi trường sống tự nhiên.', note: '"phá rừng" = deforestation. "môi trường sống" = habitat.', tags: [] },
      { en: 'Renewable energy can replace fossil fuels.', vi: 'Năng lượng tái tạo có thể thay thế nhiên liệu hóa thạch.', note: '"năng lượng tái tạo" = renewable energy.', tags: [] },
      { en: 'Plastic waste is polluting our oceans.', vi: 'Rác thải nhựa đang gây ô nhiễm đại dương.', note: '"rác thải nhựa" = plastic waste. "đại dương" = ocean.', tags: [] },
      { en: 'Governments should invest more in green technology.', vi: 'Chính phủ nên đầu tư nhiều hơn vào công nghệ xanh.', note: '"đầu tư" = invest. "công nghệ xanh" = green technology.', tags: [] },
      { en: 'Everyone has a responsibility to protect the environment.', vi: 'Mỗi người đều có trách nhiệm bảo vệ môi trường.', note: '"trách nhiệm" = responsibility. "bảo vệ" = protect.', tags: [] },
      { en: 'Air quality in big cities is getting worse.', vi: 'Chất lượng không khí ở thành phố lớn ngày càng tệ.', note: '"chất lượng không khí" = air quality. "ngày càng tệ" = getting worse.', tags: [] },
      { en: 'Water conservation is essential for the future.', vi: 'Tiết kiệm nước là thiết yếu cho tương lai.', note: '"tiết kiệm nước" = water conservation.', tags: [] },
      { en: 'Many species are at risk of extinction.', vi: 'Nhiều loài đang có nguy cơ tuyệt chủng.', note: '"tuyệt chủng" = extinction. "nguy cơ" = risk.', tags: [] },
      { en: 'Organic farming is better for the soil.', vi: 'Nông nghiệp hữu cơ tốt hơn cho đất.', note: '"nông nghiệp hữu cơ" = organic farming. "đất" = soil.', tags: [] },
      { en: 'Public transport reduces carbon emissions.', vi: 'Giao thông công cộng giảm lượng khí thải carbon.', note: '"giao thông công cộng" = public transport. "khí thải" = emissions.', tags: [] },
      { en: 'Natural disasters are becoming more frequent.', vi: 'Thiên tai đang trở nên thường xuyên hơn.', note: '"thiên tai" = natural disaster. "thường xuyên" = frequent.', tags: [] },
      { en: 'We should ban single-use plastics.', vi: 'Chúng ta nên cấm đồ nhựa dùng một lần.', note: '"cấm" = ban. "dùng một lần" = single-use.', tags: [] },
      { en: 'Trees absorb carbon dioxide from the air.', vi: 'Cây xanh hấp thụ khí CO2 từ không khí.', note: '"hấp thụ" = absorb. "cây xanh" = trees (literally green trees).', tags: [] },
      { en: 'Eco-tourism promotes environmental awareness.', vi: 'Du lịch sinh thái thúc đẩy nhận thức về môi trường.', note: '"du lịch sinh thái" = eco-tourism. "nhận thức" = awareness.', tags: [] },
      { en: 'Global warming causes sea levels to rise.', vi: 'Nóng lên toàn cầu khiến mực nước biển dâng.', note: '"nóng lên toàn cầu" = global warming. "mực nước biển" = sea level.', tags: [] },
      { en: 'Individual actions can make a big difference.', vi: 'Hành động cá nhân có thể tạo ra sự khác biệt lớn.', note: '"hành động cá nhân" = individual actions.', tags: [] },
      { en: 'Solar panels are becoming more affordable.', vi: 'Tấm pin mặt trời ngày càng phải chăng hơn.', note: '"tấm pin mặt trời" = solar panel. "phải chăng" = affordable.', tags: [] },
    ],
  },
  {
    id: 'ielts-health-01',
    title: { en: 'IELTS: Health & Fitness', vi: 'IELTS: Sức khỏe & Thể dục' },
    level: 'intermediate',
    topic: 'ielts',
    sentences: [
      { en: 'Regular exercise is essential for good health.', vi: 'Tập thể dục thường xuyên là thiết yếu cho sức khỏe.', note: '"tập thể dục" = exercise. "thường xuyên" = regularly.', tags: [] },
      { en: 'A balanced diet includes fruit, vegetables and protein.', vi: 'Chế độ ăn cân bằng bao gồm trái cây, rau và protein.', note: '"chế độ ăn" = diet. "cân bằng" = balanced.', tags: [] },
      { en: 'Mental health is just as important as physical health.', vi: 'Sức khỏe tinh thần cũng quan trọng như sức khỏe thể chất.', note: '"tinh thần" = mental. "thể chất" = physical.', tags: [] },
      { en: 'Stress can lead to serious health problems.', vi: 'Căng thẳng có thể dẫn đến các vấn đề sức khỏe nghiêm trọng.', note: '"căng thẳng" = stress. "dẫn đến" = lead to.', tags: [] },
      { en: 'Smoking is the leading cause of lung cancer.', vi: 'Hút thuốc là nguyên nhân hàng đầu gây ung thư phổi.', note: '"hút thuốc" = smoking. "ung thư phổi" = lung cancer.', tags: [] },
      { en: 'Getting enough sleep is crucial for your wellbeing.', vi: 'Ngủ đủ giấc rất quan trọng cho sức khỏe.', note: '"ngủ đủ giấc" = get enough sleep.', tags: [] },
      { en: 'Fast food is convenient but unhealthy.', vi: 'Đồ ăn nhanh tiện lợi nhưng không tốt cho sức khỏe.', note: '"đồ ăn nhanh" = fast food. "tiện lợi" = convenient.', tags: [] },
      { en: 'Walking is one of the simplest forms of exercise.', vi: 'Đi bộ là một trong những hình thức tập thể dục đơn giản nhất.', note: '"đi bộ" = walking. "đơn giản nhất" = simplest.', tags: [] },
      { en: 'Drinking plenty of water keeps you hydrated.', vi: 'Uống nhiều nước giúp cơ thể đủ nước.', note: '"đủ nước" = hydrated.', tags: [] },
      { en: 'Obesity rates are increasing worldwide.', vi: 'Tỷ lệ béo phì đang tăng trên toàn thế giới.', note: '"béo phì" = obesity. "tỷ lệ" = rate.', tags: [] },
      { en: 'Yoga helps reduce stress and improve flexibility.', vi: 'Yoga giúp giảm căng thẳng và cải thiện sự linh hoạt.', note: '"linh hoạt" = flexibility.', tags: [] },
      { en: 'Vaccinations protect communities from disease.', vi: 'Tiêm chủng bảo vệ cộng đồng khỏi bệnh tật.', note: '"tiêm chủng" = vaccination. "cộng đồng" = community.', tags: [] },
      { en: 'Healthcare should be affordable for everyone.', vi: 'Chăm sóc y tế nên phải chăng cho tất cả mọi người.', note: '"chăm sóc y tế" = healthcare.', tags: [] },
      { en: 'Meditation can improve your mental clarity.', vi: 'Thiền có thể cải thiện sự minh mẫn tinh thần.', note: '"thiền" = meditation. "minh mẫn" = clarity.', tags: [] },
      { en: 'Too much sugar can cause diabetes.', vi: 'Quá nhiều đường có thể gây bệnh tiểu đường.', note: '"bệnh tiểu đường" = diabetes.', tags: [] },
      { en: 'Fresh air and sunshine are good for your mood.', vi: 'Không khí trong lành và ánh nắng tốt cho tâm trạng.', note: '"tâm trạng" = mood. "không khí trong lành" = fresh air.', tags: [] },
      { en: 'It is important to have regular health check-ups.', vi: 'Khám sức khỏe định kỳ là rất quan trọng.', note: '"khám sức khỏe" = health check-up. "định kỳ" = regular/periodic.', tags: [] },
      { en: 'Sedentary lifestyles contribute to heart disease.', vi: 'Lối sống ít vận động góp phần gây bệnh tim.', note: '"ít vận động" = sedentary. "bệnh tim" = heart disease.', tags: [] },
      { en: 'Cooking at home is healthier than eating out.', vi: 'Nấu ăn ở nhà tốt cho sức khỏe hơn ăn ngoài.', note: '"nấu ăn ở nhà" = cook at home. "ăn ngoài" = eat out.', tags: [] },
      { en: 'Sports teach discipline and teamwork.', vi: 'Thể thao dạy kỷ luật và tinh thần đồng đội.', note: '"kỷ luật" = discipline. "tinh thần đồng đội" = teamwork spirit.', tags: [] },
    ],
  },
  {
    id: 'ielts-media-01',
    title: { en: 'IELTS: Media & Advertising', vi: 'IELTS: Truyền thông & Quảng cáo' },
    level: 'upper-intermediate',
    topic: 'ielts',
    sentences: [
      { en: 'The media has a powerful influence on public opinion.', vi: 'Truyền thông có ảnh hưởng mạnh mẽ đến dư luận.', note: '"dư luận" = public opinion. "ảnh hưởng" = influence.', tags: [] },
      { en: 'Fake news is a growing problem worldwide.', vi: 'Tin giả là vấn đề ngày càng lớn trên toàn thế giới.', note: '"tin giả" = fake news.', tags: [] },
      { en: 'Advertising targets people\'s emotions to sell products.', vi: 'Quảng cáo nhắm vào cảm xúc để bán sản phẩm.', note: '"nhắm vào" = target. "cảm xúc" = emotions.', tags: [] },
      { en: 'Social media has changed the way news is reported.', vi: 'Mạng xã hội đã thay đổi cách tin tức được đưa tin.', note: '"đưa tin" = report news.', tags: [] },
      { en: 'People should check the source before sharing news.', vi: 'Mọi người nên kiểm tra nguồn trước khi chia sẻ tin tức.', note: '"nguồn" = source. "chia sẻ" = share.', tags: [] },
      { en: 'Newspapers are losing readers to online platforms.', vi: 'Báo giấy đang mất độc giả vào các nền tảng trực tuyến.', note: '"báo giấy" = print newspaper. "độc giả" = readers.', tags: [] },
      { en: 'Children are especially vulnerable to advertising.', vi: 'Trẻ em đặc biệt dễ bị ảnh hưởng bởi quảng cáo.', note: '"dễ bị ảnh hưởng" = vulnerable/susceptible.', tags: [] },
      { en: 'Influencers have become a new form of marketing.', vi: 'Người có ảnh hưởng đã trở thành hình thức tiếp thị mới.', note: '"người có ảnh hưởng" = influencer. "tiếp thị" = marketing.', tags: [] },
      { en: 'Freedom of the press is essential in a democracy.', vi: 'Tự do báo chí là thiết yếu trong xã hội dân chủ.', note: '"tự do báo chí" = press freedom. "dân chủ" = democracy.', tags: [] },
      { en: 'Advertisements can be misleading.', vi: 'Quảng cáo có thể gây hiểu lầm.', note: '"gây hiểu lầm" = misleading.', tags: [] },
      { en: 'Documentaries can educate people about important issues.', vi: 'Phim tài liệu có thể giáo dục mọi người về các vấn đề quan trọng.', note: '"phim tài liệu" = documentary.', tags: [] },
      { en: 'Too much screen time affects concentration.', vi: 'Quá nhiều thời gian trước màn hình ảnh hưởng đến sự tập trung.', note: '"sự tập trung" = concentration.', tags: [] },
      { en: 'Podcasts have become a popular way to learn.', vi: 'Podcast đã trở thành cách học phổ biến.', note: '"phổ biến" = popular.', tags: [] },
      { en: 'Celebrity endorsements influence consumer choices.', vi: 'Người nổi tiếng quảng bá ảnh hưởng đến lựa chọn người tiêu dùng.', note: '"người tiêu dùng" = consumer. "lựa chọn" = choices.', tags: [] },
      { en: 'Censorship limits freedom of expression.', vi: 'Kiểm duyệt hạn chế quyền tự do ngôn luận.', note: '"kiểm duyệt" = censorship. "tự do ngôn luận" = freedom of expression.', tags: [] },
      { en: 'Algorithms decide what content we see online.', vi: 'Thuật toán quyết định nội dung chúng ta thấy trên mạng.', note: '"thuật toán" = algorithm. "nội dung" = content.', tags: [] },
      { en: 'Investigative journalism holds the powerful accountable.', vi: 'Báo chí điều tra buộc người có quyền lực phải chịu trách nhiệm.', note: '"báo chí điều tra" = investigative journalism.', tags: [] },
      { en: 'Ad-free subscriptions are becoming more common.', vi: 'Đăng ký không quảng cáo ngày càng phổ biến.', note: '"đăng ký" = subscription. "không quảng cáo" = ad-free.', tags: [] },
      { en: 'The news should be objective and balanced.', vi: 'Tin tức nên khách quan và cân bằng.', note: '"khách quan" = objective. "cân bằng" = balanced.', tags: [] },
      { en: 'Media literacy helps people think critically about information.', vi: 'Hiểu biết về truyền thông giúp mọi người suy nghĩ phản biện về thông tin.', note: '"suy nghĩ phản biện" = think critically.', tags: [] },
    ],
  },
  {
    id: 'ielts-urbanisation-01',
    title: { en: 'IELTS: Cities & Urbanisation', vi: 'IELTS: Đô thị hóa' },
    level: 'intermediate',
    topic: 'ielts',
    sentences: [
      { en: 'More people are moving from rural areas to cities.', vi: 'Ngày càng nhiều người chuyển từ nông thôn lên thành phố.', note: '"nông thôn" = rural. "thành phố" = city.', tags: [] },
      { en: 'Traffic congestion is a major problem in big cities.', vi: 'Tắc nghẽn giao thông là vấn đề lớn ở thành phố lớn.', note: '"tắc nghẽn giao thông" = traffic congestion.', tags: [] },
      { en: 'Cities offer more job opportunities than rural areas.', vi: 'Thành phố có nhiều cơ hội việc làm hơn nông thôn.', note: '"cơ hội việc làm" = job opportunities.', tags: [] },
      { en: 'Affordable housing is hard to find in city centres.', vi: 'Nhà giá rẻ rất khó tìm ở trung tâm thành phố.', note: '"nhà giá rẻ" = affordable housing. "trung tâm" = centre.', tags: [] },
      { en: 'Green spaces improve the quality of life in cities.', vi: 'Không gian xanh cải thiện chất lượng cuộc sống ở thành phố.', note: '"không gian xanh" = green spaces.', tags: [] },
      { en: 'Public transport should be improved to reduce pollution.', vi: 'Giao thông công cộng nên được cải thiện để giảm ô nhiễm.', note: '"giao thông công cộng" = public transport.', tags: [] },
      { en: 'Urbanisation brings both opportunities and challenges.', vi: 'Đô thị hóa mang lại cả cơ hội và thách thức.', note: '"đô thị hóa" = urbanisation. "thách thức" = challenges.', tags: [] },
      { en: 'High-rise buildings are changing the city skyline.', vi: 'Nhà cao tầng đang thay đổi đường chân trời thành phố.', note: '"nhà cao tầng" = high-rise building.', tags: [] },
      { en: 'Many young people prefer living in cities.', vi: 'Nhiều người trẻ thích sống ở thành phố.', note: '"người trẻ" = young people.', tags: [] },
      { en: 'The cost of living in cities keeps rising.', vi: 'Chi phí sinh hoạt ở thành phố ngày càng tăng.', note: '"chi phí sinh hoạt" = cost of living. "ngày càng tăng" = keeps rising.', tags: [] },
      { en: 'Smart cities use technology to improve services.', vi: 'Thành phố thông minh sử dụng công nghệ để cải thiện dịch vụ.', note: '"thành phố thông minh" = smart city.', tags: [] },
      { en: 'Noise pollution affects people\'s sleep and health.', vi: 'Ô nhiễm tiếng ồn ảnh hưởng đến giấc ngủ và sức khỏe.', note: '"ô nhiễm tiếng ồn" = noise pollution.', tags: [] },
      { en: 'Some cities are banning cars from the centre.', vi: 'Một số thành phố đang cấm xe hơi vào trung tâm.', note: '"cấm" = ban. "xe hơi" = cars.', tags: [] },
      { en: 'Rural villages are losing their young population.', vi: 'Làng quê đang mất dân số trẻ.', note: '"làng quê" = rural village. "dân số" = population.', tags: [] },
      { en: 'Overcrowding leads to health and safety issues.', vi: 'Quá tải dân số dẫn đến các vấn đề sức khỏe và an toàn.', note: '"quá tải dân số" = overcrowding.', tags: [] },
      { en: 'Parks and gardens are important for mental health.', vi: 'Công viên và vườn hoa quan trọng cho sức khỏe tinh thần.', note: '"công viên" = park. "vườn hoa" = garden.', tags: [] },
      { en: 'Infrastructure must keep up with population growth.', vi: 'Cơ sở hạ tầng phải theo kịp tăng trưởng dân số.', note: '"cơ sở hạ tầng" = infrastructure. "theo kịp" = keep up with.', tags: [] },
      { en: 'Many people commute long distances to work.', vi: 'Nhiều người đi làm xa hàng ngày.', note: '"đi làm xa" = commute long distances.', tags: [] },
      { en: 'City planning should prioritise pedestrians and cyclists.', vi: 'Quy hoạch thành phố nên ưu tiên người đi bộ và người đi xe đạp.', note: '"quy hoạch" = planning. "ưu tiên" = prioritise.', tags: [] },
      { en: 'A good neighbourhood has shops, schools and hospitals nearby.', vi: 'Một khu phố tốt có cửa hàng, trường học và bệnh viện gần đó.', note: '"khu phố" = neighbourhood.', tags: [] },
    ],
  },
  {
    id: 'ielts-culture-01',
    title: { en: 'IELTS: Culture & Traditions', vi: 'IELTS: Văn hóa & Truyền thống' },
    level: 'intermediate',
    topic: 'ielts',
    sentences: [
      { en: 'Globalisation is changing traditional cultures.', vi: 'Toàn cầu hóa đang thay đổi các nền văn hóa truyền thống.', note: '"toàn cầu hóa" = globalisation. "nền văn hóa" = culture.', tags: [] },
      { en: 'It is important to preserve cultural heritage.', vi: 'Bảo tồn di sản văn hóa là rất quan trọng.', note: '"bảo tồn" = preserve. "di sản văn hóa" = cultural heritage.', tags: [] },
      { en: 'Festivals bring communities together.', vi: 'Lễ hội gắn kết cộng đồng.', note: '"lễ hội" = festival. "gắn kết" = bring together.', tags: [] },
      { en: 'Traditional food is part of a country\'s identity.', vi: 'Ẩm thực truyền thống là một phần bản sắc quốc gia.', note: '"ẩm thực" = cuisine. "bản sắc" = identity.', tags: [] },
      { en: 'Young people are losing interest in traditional arts.', vi: 'Giới trẻ đang mất hứng thú với nghệ thuật truyền thống.', note: '"nghệ thuật" = arts. "mất hứng thú" = losing interest.', tags: [] },
      { en: 'Multicultural societies can learn from each other.', vi: 'Xã hội đa văn hóa có thể học hỏi lẫn nhau.', note: '"đa văn hóa" = multicultural. "học hỏi lẫn nhau" = learn from each other.', tags: [] },
      { en: 'Music and dance are universal forms of expression.', vi: 'Âm nhạc và nhảy múa là hình thức biểu đạt phổ quát.', note: '"biểu đạt" = expression. "phổ quát" = universal.', tags: [] },
      { en: 'Language is a key part of cultural identity.', vi: 'Ngôn ngữ là phần quan trọng của bản sắc văn hóa.', note: '"ngôn ngữ" = language.', tags: [] },
      { en: 'Tourism can both help and harm local cultures.', vi: 'Du lịch có thể vừa giúp ích vừa gây hại cho văn hóa địa phương.', note: '"văn hóa địa phương" = local culture.', tags: [] },
      { en: 'Traditional medicine is still widely used in many countries.', vi: 'Y học cổ truyền vẫn được sử dụng rộng rãi ở nhiều quốc gia.', note: '"y học cổ truyền" = traditional medicine.', tags: [] },
      { en: 'Customs vary greatly between different regions.', vi: 'Phong tục khác nhau rất nhiều giữa các vùng.', note: '"phong tục" = customs.', tags: [] },
      { en: 'Museums help people understand their history.', vi: 'Bảo tàng giúp mọi người hiểu lịch sử.', note: '"bảo tàng" = museum. "lịch sử" = history.', tags: [] },
      { en: 'Some traditions are becoming less relevant in modern life.', vi: 'Một số truyền thống đang trở nên ít phù hợp trong cuộc sống hiện đại.', note: '"phù hợp" = relevant. "hiện đại" = modern.', tags: [] },
      { en: 'Respecting elders is a core value in Vietnamese culture.', vi: 'Kính trọng người lớn tuổi là giá trị cốt lõi trong văn hóa Việt Nam.', note: '"kính trọng" = respect. "cốt lõi" = core.', tags: [] },
      { en: 'National holidays remind us of our shared history.', vi: 'Ngày lễ quốc gia nhắc nhở chúng ta về lịch sử chung.', note: '"ngày lễ quốc gia" = national holiday.', tags: [] },
      { en: 'Art reflects the values and beliefs of a society.', vi: 'Nghệ thuật phản ánh giá trị và niềm tin của xã hội.', note: '"phản ánh" = reflect. "niềm tin" = beliefs.', tags: [] },
      { en: 'Immigration enriches the cultural diversity of a country.', vi: 'Nhập cư làm phong phú sự đa dạng văn hóa của đất nước.', note: '"nhập cư" = immigration. "đa dạng" = diversity.', tags: [] },
      { en: 'Wearing traditional clothing shows pride in your heritage.', vi: 'Mặc trang phục truyền thống thể hiện niềm tự hào về di sản.', note: '"trang phục" = clothing. "niềm tự hào" = pride.', tags: [] },
      { en: 'Cultural exchange programmes benefit both countries.', vi: 'Chương trình giao lưu văn hóa mang lại lợi ích cho cả hai nước.', note: '"giao lưu văn hóa" = cultural exchange.', tags: [] },
      { en: 'Storytelling is one of the oldest forms of passing down knowledge.', vi: 'Kể chuyện là một trong những cách truyền đạt kiến thức lâu đời nhất.', note: '"kể chuyện" = storytelling. "truyền đạt" = pass down.', tags: [] },
    ],
  },
  {
    id: 'ielts-crime-01',
    title: { en: 'IELTS: Crime & Law', vi: 'IELTS: Tội phạm & Pháp luật' },
    level: 'upper-intermediate',
    topic: 'ielts',
    sentences: [
      { en: 'Crime rates tend to be higher in big cities.', vi: 'Tỷ lệ tội phạm thường cao hơn ở thành phố lớn.', note: '"tỷ lệ tội phạm" = crime rate.', tags: [] },
      { en: 'Poverty is one of the main causes of crime.', vi: 'Nghèo đói là một trong những nguyên nhân chính của tội phạm.', note: '"nghèo đói" = poverty. "nguyên nhân" = cause.', tags: [] },
      { en: 'Prisons should focus on rehabilitation, not just punishment.', vi: 'Nhà tù nên tập trung vào cải tạo, không chỉ trừng phạt.', note: '"cải tạo" = rehabilitation. "trừng phạt" = punishment.', tags: [] },
      { en: 'CCTV cameras help prevent crime in public areas.', vi: 'Camera giám sát giúp ngăn chặn tội phạm ở nơi công cộng.', note: '"camera giám sát" = CCTV. "ngăn chặn" = prevent.', tags: [] },
      { en: 'Cybercrime is increasing as more people go online.', vi: 'Tội phạm mạng đang tăng khi nhiều người lên mạng hơn.', note: '"tội phạm mạng" = cybercrime.', tags: [] },
      { en: 'Young offenders should be given a second chance.', vi: 'Người phạm tội trẻ nên được cho cơ hội thứ hai.', note: '"người phạm tội trẻ" = young offender. "cơ hội" = chance.', tags: [] },
      { en: 'Education and employment reduce the risk of reoffending.', vi: 'Giáo dục và việc làm giảm nguy cơ tái phạm.', note: '"tái phạm" = reoffend.', tags: [] },
      { en: 'The death penalty is a controversial topic.', vi: 'Án tử hình là chủ đề gây tranh cãi.', note: '"án tử hình" = death penalty. "gây tranh cãi" = controversial.', tags: [] },
      { en: 'Community service can be an effective punishment.', vi: 'Lao động công ích có thể là hình phạt hiệu quả.', note: '"lao động công ích" = community service.', tags: [] },
      { en: 'Stricter laws do not always reduce crime.', vi: 'Luật nghiêm khắc hơn không phải lúc nào cũng giảm tội phạm.', note: '"nghiêm khắc" = strict.', tags: [] },
      { en: 'Drug addiction is a public health issue, not just a crime.', vi: 'Nghiện ma túy là vấn đề sức khỏe cộng đồng, không chỉ là tội phạm.', note: '"nghiện ma túy" = drug addiction.', tags: [] },
      { en: 'Police should build trust with local communities.', vi: 'Cảnh sát nên xây dựng niềm tin với cộng đồng địa phương.', note: '"xây dựng niềm tin" = build trust.', tags: [] },
      { en: 'White-collar crime often goes unpunished.', vi: 'Tội phạm cổ cồn trắng thường không bị trừng phạt.', note: '"tội phạm cổ cồn trắng" = white-collar crime.', tags: [] },
      { en: 'Victims of crime need better support services.', vi: 'Nạn nhân tội phạm cần dịch vụ hỗ trợ tốt hơn.', note: '"nạn nhân" = victim. "dịch vụ hỗ trợ" = support services.', tags: [] },
      { en: 'Corruption damages public trust in government.', vi: 'Tham nhũng làm tổn hại niềm tin vào chính phủ.', note: '"tham nhũng" = corruption. "tổn hại" = damage.', tags: [] },
      { en: 'Neighbourhood watch programmes help keep areas safe.', vi: 'Chương trình tuần tra khu phố giúp giữ an toàn khu vực.', note: '"tuần tra" = patrol/watch.', tags: [] },
      { en: 'Harsher sentences may deter potential criminals.', vi: 'Hình phạt nặng hơn có thể răn đe tội phạm tiềm năng.', note: '"răn đe" = deter. "tiềm năng" = potential.', tags: [] },
      { en: 'Domestic violence is still underreported in many countries.', vi: 'Bạo lực gia đình vẫn chưa được báo cáo đầy đủ ở nhiều nước.', note: '"bạo lực gia đình" = domestic violence.', tags: [] },
      { en: 'Equal access to justice is a fundamental right.', vi: 'Tiếp cận công lý bình đẳng là quyền cơ bản.', note: '"công lý" = justice. "quyền cơ bản" = fundamental right.', tags: [] },
      { en: 'Restorative justice focuses on repairing harm.', vi: 'Tư pháp phục hồi tập trung vào việc sửa chữa tổn thương.', note: '"tư pháp phục hồi" = restorative justice.', tags: [] },
    ],
  },
  {
    id: 'ielts-travel-tourism-01',
    title: { en: 'IELTS: Travel & Tourism', vi: 'IELTS: Du lịch & Lữ hành' },
    level: 'intermediate',
    topic: 'ielts',
    sentences: [
      { en: 'Tourism is a major source of income for many countries.', vi: 'Du lịch là nguồn thu nhập chính cho nhiều quốc gia.', note: '"nguồn thu nhập" = source of income.', tags: [] },
      { en: 'Mass tourism can damage the environment.', vi: 'Du lịch đại trà có thể gây hại cho môi trường.', note: '"du lịch đại trà" = mass tourism.', tags: [] },
      { en: 'Travelling broadens your understanding of different cultures.', vi: 'Du lịch mở rộng hiểu biết về các nền văn hóa khác nhau.', note: '"mở rộng hiểu biết" = broaden understanding.', tags: [] },
      { en: 'Budget airlines have made travel more accessible.', vi: 'Hãng hàng không giá rẻ đã giúp du lịch dễ tiếp cận hơn.', note: '"hãng hàng không giá rẻ" = budget airline.', tags: [] },
      { en: 'Sustainable tourism respects local communities.', vi: 'Du lịch bền vững tôn trọng cộng đồng địa phương.', note: '"bền vững" = sustainable. "tôn trọng" = respect.', tags: [] },
      { en: 'Overtourism is destroying popular destinations.', vi: 'Du lịch quá tải đang phá hủy các điểm đến nổi tiếng.', note: '"du lịch quá tải" = overtourism. "điểm đến" = destination.', tags: [] },
      { en: 'Cultural tourism helps preserve traditions.', vi: 'Du lịch văn hóa giúp bảo tồn truyền thống.', note: '"bảo tồn" = preserve.', tags: [] },
      { en: 'Accommodation prices increase during peak season.', vi: 'Giá chỗ ở tăng trong mùa cao điểm.', note: '"chỗ ở" = accommodation. "mùa cao điểm" = peak season.', tags: [] },
      { en: 'Solo travel is becoming more popular among young people.', vi: 'Du lịch một mình ngày càng phổ biến ở giới trẻ.', note: '"du lịch một mình" = solo travel.', tags: [] },
      { en: 'Tourists should respect local customs and traditions.', vi: 'Du khách nên tôn trọng phong tục và truyền thống địa phương.', note: '"du khách" = tourist. "phong tục" = customs.', tags: [] },
      { en: 'Air travel contributes significantly to carbon emissions.', vi: 'Du lịch hàng không đóng góp đáng kể vào lượng khí thải carbon.', note: '"du lịch hàng không" = air travel.', tags: [] },
      { en: 'Ecotourism raises awareness about conservation.', vi: 'Du lịch sinh thái nâng cao nhận thức về bảo tồn.', note: '"nâng cao nhận thức" = raise awareness.', tags: [] },
      { en: 'Travelling helps you develop independence and confidence.', vi: 'Du lịch giúp phát triển sự tự lập và tự tin.', note: '"tự lập" = independence. "tự tin" = confidence.', tags: [] },
      { en: 'Some countries depend heavily on tourism revenue.', vi: 'Một số quốc gia phụ thuộc nhiều vào doanh thu du lịch.', note: '"doanh thu" = revenue.', tags: [] },
      { en: 'Learning a few local words shows respect.', vi: 'Học vài từ địa phương thể hiện sự tôn trọng.', note: '"thể hiện" = show/demonstrate.', tags: [] },
      { en: 'Travel vlogs influence where people choose to go.', vi: 'Vlog du lịch ảnh hưởng đến nơi mọi người chọn đi.', note: '"ảnh hưởng đến" = influence.', tags: [] },
      { en: 'Heritage sites should be protected from overdevelopment.', vi: 'Di tích lịch sử cần được bảo vệ khỏi phát triển quá mức.', note: '"di tích lịch sử" = heritage site.', tags: [] },
      { en: 'Homestays offer an authentic cultural experience.', vi: 'Homestay mang lại trải nghiệm văn hóa chân thực.', note: '"chân thực" = authentic.', tags: [] },
      { en: 'Travel insurance is important for unexpected situations.', vi: 'Bảo hiểm du lịch quan trọng cho những tình huống bất ngờ.', note: '"bảo hiểm du lịch" = travel insurance.', tags: [] },
      { en: 'Visiting local markets is one of the best ways to experience a culture.', vi: 'Thăm chợ địa phương là cách tốt nhất để trải nghiệm văn hóa.', note: '"chợ địa phương" = local market.', tags: [] },
    ],
  },
  {
    id: 'ielts-work-life-01',
    title: { en: 'IELTS: Work-Life Balance', vi: 'IELTS: Cân bằng Công việc-Cuộc sống' },
    level: 'intermediate',
    topic: 'ielts',
    sentences: [
      { en: 'Work-life balance is essential for happiness.', vi: 'Cân bằng công việc-cuộc sống là thiết yếu cho hạnh phúc.', note: '"cân bằng" = balance. "hạnh phúc" = happiness.', tags: [] },
      { en: 'Many people work overtime without extra pay.', vi: 'Nhiều người làm thêm giờ mà không được trả thêm.', note: '"làm thêm giờ" = work overtime.', tags: [] },
      { en: 'Remote work allows more flexibility.', vi: 'Làm việc từ xa cho phép linh hoạt hơn.', note: '"làm việc từ xa" = remote work. "linh hoạt" = flexible.', tags: [] },
      { en: 'Burnout is a growing problem in modern workplaces.', vi: 'Kiệt sức là vấn đề ngày càng lớn ở nơi làm việc hiện đại.', note: '"kiệt sức" = burnout.', tags: [] },
      { en: 'Companies should offer flexible working hours.', vi: 'Công ty nên cung cấp giờ làm việc linh hoạt.', note: '"giờ làm việc linh hoạt" = flexible working hours.', tags: [] },
      { en: 'Taking regular breaks improves productivity.', vi: 'Nghỉ ngơi đều đặn cải thiện năng suất.', note: '"năng suất" = productivity.', tags: [] },
      { en: 'Job satisfaction is more important than a high salary.', vi: 'Sự hài lòng công việc quan trọng hơn lương cao.', note: '"sự hài lòng" = satisfaction.', tags: [] },
      { en: 'The four-day work week is being tested in some countries.', vi: 'Tuần làm việc bốn ngày đang được thử nghiệm ở một số quốc gia.', note: '"thử nghiệm" = being tested/trialled.', tags: [] },
      { en: 'Hobbies help people relax after a stressful day.', vi: 'Sở thích giúp mọi người thư giãn sau ngày căng thẳng.', note: '"thư giãn" = relax.', tags: [] },
      { en: 'Parents often struggle to balance work and childcare.', vi: 'Phụ huynh thường gặp khó khăn cân bằng công việc và chăm con.', note: '"chăm con" = childcare.', tags: [] },
      { en: 'A toxic work environment affects mental health.', vi: 'Môi trường làm việc độc hại ảnh hưởng đến sức khỏe tinh thần.', note: '"độc hại" = toxic.', tags: [] },
      { en: 'Retirement age is increasing in many countries.', vi: 'Tuổi nghỉ hưu đang tăng ở nhiều quốc gia.', note: '"tuổi nghỉ hưu" = retirement age.', tags: [] },
      { en: 'Freelancing offers freedom but less job security.', vi: 'Làm tự do mang lại tự do nhưng ít ổn định công việc.', note: '"làm tự do" = freelancing. "ổn định" = security/stability.', tags: [] },
      { en: 'Automation may eliminate many routine jobs.', vi: 'Tự động hóa có thể loại bỏ nhiều công việc thường ngày.', note: '"tự động hóa" = automation. "loại bỏ" = eliminate.', tags: [] },
      { en: 'Unpaid internships exploit young workers.', vi: 'Thực tập không lương bóc lột người lao động trẻ.', note: '"thực tập không lương" = unpaid internship. "bóc lột" = exploit.', tags: [] },
      { en: 'Maternity and paternity leave should be equal.', vi: 'Nghỉ phép cho mẹ và bố nên bình đẳng.', note: '"nghỉ phép" = leave. "bình đẳng" = equal.', tags: [] },
      { en: 'Many people feel pressure to be always available online.', vi: 'Nhiều người cảm thấy áp lực phải luôn sẵn sàng trực tuyến.', note: '"sẵn sàng" = available. "áp lực" = pressure.', tags: [] },
      { en: 'A comfortable workspace increases efficiency.', vi: 'Không gian làm việc thoải mái tăng hiệu quả.', note: '"không gian làm việc" = workspace. "hiệu quả" = efficiency.', tags: [] },
      { en: 'Career development should not come at the cost of health.', vi: 'Phát triển sự nghiệp không nên đánh đổi sức khỏe.', note: '"phát triển sự nghiệp" = career development. "đánh đổi" = come at the cost of.', tags: [] },
      { en: 'Everyone deserves time to rest and recharge.', vi: 'Mỗi người đều xứng đáng có thời gian nghỉ ngơi và nạp lại năng lượng.', note: '"nạp lại năng lượng" = recharge energy.', tags: [] },
    ],
  },
  {
    id: 'ielts-ageing-01',
    title: { en: 'IELTS: Ageing & Society', vi: 'IELTS: Già hóa & Xã hội' },
    level: 'upper-intermediate',
    topic: 'ielts',
    sentences: [
      { en: 'The world\'s population is ageing rapidly.', vi: 'Dân số thế giới đang già hóa nhanh chóng.', note: '"già hóa" = ageing. "nhanh chóng" = rapidly.', tags: [] },
      { en: 'Elderly people deserve respect and dignity.', vi: 'Người già xứng đáng được tôn trọng và đối xử có phẩm giá.', note: '"phẩm giá" = dignity.', tags: [] },
      { en: 'Many older adults feel lonely and isolated.', vi: 'Nhiều người lớn tuổi cảm thấy cô đơn và bị cô lập.', note: '"cô đơn" = lonely. "cô lập" = isolated.', tags: [] },
      { en: 'Healthcare costs rise as people live longer.', vi: 'Chi phí y tế tăng khi con người sống thọ hơn.', note: '"sống thọ" = live long.', tags: [] },
      { en: 'Grandparents play an important role in raising children.', vi: 'Ông bà đóng vai trò quan trọng trong việc nuôi dạy trẻ.', note: '"nuôi dạy" = raise/nurture children.', tags: [] },
      { en: 'Pension systems are under strain in many countries.', vi: 'Hệ thống lương hưu đang chịu áp lực ở nhiều nước.', note: '"lương hưu" = pension. "chịu áp lực" = under strain.', tags: [] },
      { en: 'Older workers bring valuable experience to the workplace.', vi: 'Người lao động lớn tuổi mang lại kinh nghiệm quý báu cho nơi làm việc.', note: '"quý báu" = valuable.', tags: [] },
      { en: 'Age discrimination in the workplace is illegal in many countries.', vi: 'Phân biệt đối xử theo tuổi tác ở nơi làm việc là bất hợp pháp.', note: '"phân biệt đối xử" = discrimination.', tags: [] },
      { en: 'Nursing homes should provide quality care.', vi: 'Viện dưỡng lão nên cung cấp chăm sóc chất lượng.', note: '"viện dưỡng lão" = nursing home.', tags: [] },
      { en: 'Staying active is important for healthy ageing.', vi: 'Duy trì hoạt động là quan trọng cho quá trình già hóa khỏe mạnh.', note: '"duy trì hoạt động" = staying active.', tags: [] },
      { en: 'Intergenerational programmes benefit both young and old.', vi: 'Chương trình liên thế hệ mang lại lợi ích cho cả trẻ và già.', note: '"liên thế hệ" = intergenerational.', tags: [] },
      { en: 'Technology can help elderly people live independently.', vi: 'Công nghệ có thể giúp người già sống độc lập.', note: '"sống độc lập" = live independently.', tags: [] },
      { en: 'Many cultures value the wisdom of older generations.', vi: 'Nhiều nền văn hóa coi trọng trí tuệ của thế hệ trước.', note: '"trí tuệ" = wisdom. "thế hệ trước" = older generations.', tags: [] },
      { en: 'Dementia is one of the biggest challenges of ageing.', vi: 'Sa sút trí tuệ là một trong những thách thức lớn nhất của tuổi già.', note: '"sa sút trí tuệ" = dementia.', tags: [] },
      { en: 'Adult children often care for their ageing parents.', vi: 'Con cái trưởng thành thường chăm sóc cha mẹ già.', note: '"trưởng thành" = adult. Very common in Vietnamese families.', tags: [] },
      { en: 'Lifelong learning keeps the mind sharp.', vi: 'Học tập suốt đời giữ cho đầu óc minh mẫn.', note: '"học tập suốt đời" = lifelong learning. "minh mẫn" = sharp/clear.', tags: [] },
      { en: 'Social activities reduce loneliness in old age.', vi: 'Hoạt động xã hội giảm sự cô đơn ở tuổi già.', note: '"hoạt động xã hội" = social activities.', tags: [] },
      { en: 'The retirement age may need to increase.', vi: 'Tuổi nghỉ hưu có thể cần tăng lên.', note: '"tuổi nghỉ hưu" = retirement age.', tags: [] },
      { en: 'Elderly care is a shared responsibility between family and state.', vi: 'Chăm sóc người già là trách nhiệm chung của gia đình và nhà nước.', note: '"nhà nước" = state/government.', tags: [] },
      { en: 'Growing old should not mean growing invisible.', vi: 'Già đi không nên có nghĩa là trở nên vô hình.', note: '"vô hình" = invisible. Strong IELTS conclusion sentence.', tags: [] },
    ],
  },
]

export function getLessonById(id) {
  return lessons.find(l => l.id === id)
}

export function getLessonsByLevel(level) {
  return lessons.filter(l => l.level === level)
}

/** Build a children summary string from childrenDetails, e.g. "1 son and 2 daughters" */
function buildChildrenSummary(details) {
  if (!details || !details.length) return ''
  const sons = details.filter(c => c.gender === 'son' && c.gender !== '—').length
  const daughters = details.filter(c => c.gender === 'daughter' && c.gender !== '—').length
  const parts = []
  if (sons) parts.push(`${sons} son${sons > 1 ? 's' : ''}`)
  if (daughters) parts.push(`${daughters} daughter${daughters > 1 ? 's' : ''}`)
  return parts.join(' and ')
}

/** Build a children ages string, e.g. "10 and 7" or "10, 7, and 3" */
function buildChildrenAges(details) {
  if (!details || !details.length) return ''
  const ages = details.filter(c => c.age && c.age !== '—').map(c => c.age)
  if (ages.length === 0) return ''
  if (ages.length === 1) return ages[0]
  if (ages.length === 2) return `${ages[0]} and ${ages[1]}`
  return ages.slice(0, -1).join(', ') + ', and ' + ages[ages.length - 1]
}

/** Map age range value to a readable English phrase */
function ageRangeText(ageValue) {
  const map = {
    'under-18': 'under 18',
    '18-25': '18-25',
    '26-40': '26-40',
    '40-60': '40-60',
    '60+': 'over 60',
  }
  return map[ageValue] || ageValue || '[age]'
}

/** Replace [name], [city], [job], etc. placeholders with user profile values */
export function personaliseSentence(text, profile) {
  const childSummary = buildChildrenSummary(profile.childrenDetails)
  const childAges = buildChildrenAges(profile.childrenDetails)

  return text
    .replace(/\[name\]/gi, profile.name || '[name]')
    .replace(/\[city\]/gi, profile.city || '[your city]')
    .replace(/\[job\]/gi, profile.job || profile.school || '[your job]')
    .replace(/\[interest\]/gi, profile.interests?.split(',')[0]?.trim() || '[your interest]')
    .replace(/\[goal\]/gi, profile.goal || '[your goal]')
    .replace(/\[school\]/gi, profile.school || '[your school]')
    .replace(/\[grade\]/gi, profile.grade || '[your grade]')
    .replace(/\[children\]/gi, childSummary || profile.children || '[children]')
    .replace(/\[childrenAges\]/gi, childAges || '[ages]')
    .replace(/\[yearsMarried\]/gi, profile.yearsMarried || '[years]')
    .replace(/\[number\]/gi, profile.children && profile.children !== '0' ? profile.children : '2')
    .replace(/\[age\]/gi, ageRangeText(profile.age))
}
